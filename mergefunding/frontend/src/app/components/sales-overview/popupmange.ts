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
  selector: "dialog-overview-example-dialog",
  templateUrl: "./addfund.html",
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
    CommonModule],
})
export class FundAdd implements OnInit {
  form: FormGroup;
  userlist: any[] = [];
  fund: FormGroup = this.fb.group({
    userId: ["", Validators.required],
    type: ["", ],
    amount: ["", [Validators.required]],
    source: ["", Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FundAdd>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private connectaServe: CoreService 
  ) {}

  ngOnInit(): void {
    this.gerlist()

  }
  async ondatasubmit() {
    try {
      if(this.fund.valid){
        if(this.fund.value.amount >= 0 ){
          this.fund.value.type = 'add';
        }else{
          this.fund.value.type = 'remove';
        }
        const response: any = await this.connectaServe
        .post('user/addFund' ,this.fund.value)
        .toPromise();

      if (response.status) {
        alert('Fund Added')
        this.dialogRef.close();
      }
      }
   
    } catch (error) {
      console.error(error); // Handle any errors that occur during the request
    } finally {
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
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
}
