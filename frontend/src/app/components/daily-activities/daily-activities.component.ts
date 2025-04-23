import { Component, inject, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { productsData } from "../product-performance/product-performance.component";
import { CoreService } from "src/app/services/core.service";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { ServicePopupComponent } from "./service-popup.component";

interface transactions {
  id: number;
  iconColor: string;
  icon: string;
  title: string;
  subtitle: string;
  amount: string;
  status: string;
}

@Component({
  selector: "app-daily-activities",
  imports: [
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: "./daily-activities.component.html",
})
export class AppDailyActivitiesComponent {
  displayedColumns: string[] = [
    "name",
    "Client_Id",
    "amount",
    "balance",
    "type",
  ];
  constructor(private connectaServe: CoreService) {}
  readonly dialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<productsData>([]);
  totalRecords = 0;
  pageSize = 5;
  currentPage = 0;
  userlist: any[] = [];
  usetId: any;
  ngOnInit() {
    this.gerlist();
  }
  async fetchDataByUserId(userId: string, limit: number, page: number) {
    try {
      debugger;
      const response: any = await this.connectaServe
        .post(`user/getFundByUserId`, { userId: userId, limit, page })
        .toPromise();

      if (response.status) {
        this.dataSource = response.data;
        // Optionally, update totalRecords if that information is available.
        this.totalRecords = response.total;
      }
    } catch (error) {
      console.error("Error fetching data for user:", error);
    }
  }
  onUserSelect(userId: string) {
    this.usetId = userId;
    this.fetchDataByUserId(userId, this.pageSize, this.currentPage);
  }
  async gerlist() {
    try {
      const response: any = await this.connectaServe
        .post("user/userNameList" ,{})
        .toPromise();

      if (response) {
        console.log(response);
        this.userlist = response.users;
        console.log(this.userlist);
      }
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    } finally {
    }
  }
  penviewDialog(): void {
    const dialogRef = this.dialog.open(ServicePopupComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }
  ngAfterViewInit() {
    this.paginator.page.subscribe((event: PageEvent) => {
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;

      this.fetchDataByUserId(this.usetId, this.pageSize, this.currentPage);
    });
  }
}
