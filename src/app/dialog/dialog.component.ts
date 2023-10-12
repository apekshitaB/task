import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef ,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{
  productForm !: FormGroup
  actionbtn : string="Save"
  constructor(private formBuilder: FormBuilder, private api:ApiService ,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef :MatDialogRef<DialogComponent>){}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      taskid:['',Validators.required],
      name :['',Validators.required],
      details:['',Validators.required]
     

    })

    console.log(this.editData);
    
   if(this.editData){
    this.actionbtn="Update"
    this.productForm.controls['taskid'].setValue(this.editData.taskid);
    this.productForm.controls['name'].setValue(this.editData.name);
    this.productForm.controls['details'].setValue(this.editData.details); 
    
   }
  }
reg(){
  if(!this.editData){
    if (this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Task added successfully !");
          this.productForm.reset();
          // this.dialogRef.close('save')
        },
        error:()=>{
          alert("There is some problem");
        }
      })
    }
  }
  else{   
    this.updateProduct()
  }
  // console.log(this.productForm.value);
}
  updateProduct()
  {
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("updated Successfully !")
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert('There is some error');
      }
    })
   }
}
