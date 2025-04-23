import { Component, inject, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import {
    NgApexchartsModule,
} from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { productsData } from 'src/app/pages/ui-components/tables/tables.component';
import { CoreService } from 'src/app/services/core.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FundAdd } from './popupmange';
import { MatDialog } from '@angular/material/dialog';



@Component({
    selector: 'app-sales-overview',
    imports: [ 
         MaterialModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,],
    templateUrl: './sales-overview.component.html',
})
export class AppSalesOverviewComponent {
     

    readonly dialog = inject(MatDialog);
    constructor(private connectaServe: CoreService ,private fb: FormBuilder){}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'id',
    'amount',
    'type',
    'balance',
    'source',
    'transactionId'
  ];
  dataSource = new MatTableDataSource<productsData>([]);
  totalRecords = 0;
  pageSize = 5;
  currentPage = 0;
  userlist: any[] = [];
  usetId:any
  ngOnInit() {
    this.gerlist()
  }
   ngAfterViewInit() {
      this.paginator.page.subscribe((event: PageEvent) => {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
       
        this.fetchDataByUserId(  this.usetId, this.pageSize,this.currentPage,);
      });
    }
 
   async gerlist(){
    try {
        const response: any = await this.connectaServe
          .post('user/userNameList' ,{})
          .toPromise();
  
        if (response) {
         console.log(response);
         this.userlist = response.users; 
         console.log(this.userlist );
         
        }
      } catch (error) {
        console.error(error); // Handle any errors that occur during the request
      } finally {
      }
  }
  onUserSelect(userId: string) {
     this.usetId = userId
    this.fetchDataByUserId(userId ,this.pageSize ,this.currentPage);
  }
  async fetchDataByUserId(userId: string ,limit:number ,page:number) {
    try {
        debugger
      const response: any = await this.connectaServe
        .post(`user/getFundByUserId` ,{userId:userId ,limit ,page})
        .toPromise();
      
      if (response.status) {
        this.dataSource = response.data;
        // Optionally, update totalRecords if that information is available.
        this.totalRecords = response.total; 
      }
    } catch (error) {
      console.error('Error fetching data for user:', error);
    }
  }

  penviewDialog(): void {
      const dialogRef = this.dialog.open(FundAdd, {
    
      });
      dialogRef.afterClosed().subscribe((result) => {
      
      });
    }
}
