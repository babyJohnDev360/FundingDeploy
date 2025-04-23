import {
  AfterViewInit,
  Component,
  Inject,
  inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabGroup, MatTabsModule } from "@angular/material/tabs";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { CoreService } from "src/app/services/core.service";
import { firstValueFrom } from "rxjs";
import { MaterialModule } from "src/app/material.module";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-daily-activities",
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule,
    MaterialModule,
    CommonModule,
  ],
  templateUrl: "./service-popup.component.html",
})
export class ServicePopupComponent implements OnInit{
  constructor(
    private fb: FormBuilder,
    private connectaServe: CoreService,
    public dialogRef: MatDialogRef<ServicePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  totalRecords = 0;
  pageSize = 5;
  currentPage = 0;
  userlist: any[] = [];
  usetId: any;
  form: FormGroup;
  service: FormGroup = this.fb.group({
    userId: ["", Validators.required],
    type: ["", Validators.required],
    amount: ["", [Validators.required]],
  });
  ngOnInit() {
    this.gerlist();
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
  async ondatasubmit() {
    try {
      if (this.service.valid) {
        const response: any = await this.connectaServe
          .post("user/addServiceFee", this.service.value)
          .toPromise();

        if (response.status) {
          alert("Fund Added");
          this.dialogRef.close();
        }
      }
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    } finally {
    }
  }
}
