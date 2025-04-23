import { Component, inject, model, signal, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { CoreService } from 'src/app/services/core.service';
import { DialogOverviewAddDialog, DialogOverviewDeleteDialog, DialogOverviewDialog, DialogOverviewEditDialog } from './popupmange';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  Client_Id: string;
  email: string;
  contact: string;
}
@Component({
  selector: 'app-product-performance',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './product-performance.component.html',
})
export class AppProductPerformanceComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<productsData>([]);
  totalRecords = 0;
  pageSize = 5;
  currentPage = 0;
  ngOnInit() {
    this.fetchData(this.currentPage, this.pageSize);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((event: PageEvent) => {
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
      this.fetchData(this.currentPage, this.pageSize);
    });
  }
  constructor(private connectaServe: CoreService) {}
  images = [
    'assets/images/profile/user-1.jpg',
    'assets/images/profile/user-2.jpg',
    'assets/images/profile/user-3.jpg',
    'assets/images/profile/user-4.jpg',
  ];
  displayedColumns: string[] = [
    'name',
    'Client_Id',
    'contact',
    'email',
    'Action',
  ];
  // dataSource: any;
  getRandomImage(): string {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }
  readonly dialog = inject(MatDialog);
  openDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogOverviewAddDialog, {
      data: { ...element },
    });
    dialogRef.afterClosed().subscribe((result) => {
  
    });
  }

  openEditDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogOverviewEditDialog, {
      data: { ...element },
    });
    dialogRef.afterClosed().subscribe((result) => {
     
    });
  }

  openDeleteDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogOverviewDeleteDialog, {
      data: { ...element },
    });
    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }
  
  openviewDialog(element: any): void {
    const dialogRef = this.dialog.open(DialogOverviewDialog, {
      data: { ...element },
    });
    dialogRef.afterClosed().subscribe((result) => {
    
    });
  }

  async fetchData(page: number, limit: number) {
    try {
      // Send POST request and convert the Observable to a Promise
      const response: any = await this.connectaServe
        .post('user/list' ,{
          page,
          limit
        })
        .toPromise();

      if (response) {
        this.dataSource = response.users;
        this.totalRecords = response.total; 
      }
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    } finally {
    }
  }
}

