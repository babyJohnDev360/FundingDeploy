import {
  AfterViewInit,
  Component,
  Inject,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CoreService } from 'src/app/services/core.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './create-custmer.html',
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
  ],
})
export class DialogOverviewAddDialog {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  userId:any
  profileForm: FormGroup = this.fb.group({
    clientId: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', [Validators.required]],
    phonenumber: ['', Validators.required],
    pannumber: ['', Validators.required],
  });

  bankdata: FormGroup = this.fb.group({
    acholde: ['', Validators.required],
    acnumber: ['', Validators.required],
    ifcecode: ['', [Validators.required]],
    bankname: ['', Validators.required],
    branchname: ['', Validators.required],
    accountopningdate: ['', Validators.required],
  });

  fund: FormGroup = this.fb.group({
    userId: ['', Validators.required],
    type: ['', Validators.required],
    amount: ['', [Validators.required]],
    source: ['', Validators.required],
  });
  constructor(private fb: FormBuilder, private connectaServe: CoreService) {}
  readonly dialogRef = inject(MatDialogRef<DialogOverviewAddDialog>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
  onSubmit() {
    if (this.profileForm.valid && this.tabGroup) {
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  async ondatasubmit() {
    console.log(this.profileForm.value, this.bankdata.value);
    if (this.profileForm.valid && this.bankdata.valid) {
      const data = {
        name: this.profileForm.value.name,
        clientId:this.profileForm.value.clientId,
        email: this.profileForm.value.email,
        panNo: this.profileForm.value.pannumber,
        password: this.profileForm.value.password,
        isActive: true,
        bankDetails: {
          name: this.profileForm.value.name,
          accountNo: this.bankdata.value.acnumber,
          branch: this.bankdata.value.branchname,
          ifsc: this.bankdata.value.ifcecode,
          panNumber: this.profileForm.value.pannumber,
        },
      };
      const value = await firstValueFrom(
        this.connectaServe.post('user/signup', data)
      );
      if (value?.status) {
        alert('Data Saved');
        this.userId =value
      } else {
        console.error('Invalid credentials or other issue:', value);
      }
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
  async fundadd() {
    try {
      if(this.fund.valid ){
        const data ={
            userId: this.fund.value.userId,
            type:this.fund.value.type,
            amount:this.fund.value.amount,
            source:this.fund.value.source
        }
        const value = await firstValueFrom(
          this.connectaServe.post('user/addFund', data)
        );
        if (value?.status) {
          alert('Data Saved');
        } else {
          console.error();
        }
      }
      else{

      }
    } catch (e) {
      console.log(e);
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './edit-popup.html',
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
  ],
})
export class DialogOverviewEditDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewEditDialog>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './deleted-popup.html',
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
  ],
})
export class DialogOverviewDeleteDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewDeleteDialog>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './view-popup.html',
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
  ],
})
export class DialogOverviewDialog implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [{ value: this.data.name || '--', disabled: true }],
      email: [{ value: this.data.email || '--', disabled: true }],
      isActive: [{ value: this.data.isActive || '--', disabled: true }],
      panNumber: [{ value: this.data.panNumber || '--', disabled: true }],
      bankDetails: this.fb.group({
        name: [{ value: this.data.bankDetails?.name || '--', disabled: true }],
        accountNo: [
          { value: this.data.bankDetails?.accountNo || '--', disabled: true },
        ],
        branch: [
          { value: this.data.bankDetails?.branch || '--', disabled: true },
        ],
        ifsc: [{ value: this.data.bankDetails?.ifsc || '--', disabled: true }],
      }),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
