// import { Component } from '@angular/core';
import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  title = 'project';
  displayedColumns: string[] = ['taskid','name', 'details','action'];
  dataSource!: MatTableDataSource<any>;

  
  constructor(private dialog :MatDialog ,private api:ApiService){}

  ngOnInit():void{
   this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      
    })
  }
  getAllProducts(){
     this.api.gettaskInfo()
    .subscribe({
        next:(res)=>{
          this.dataSource=new MatTableDataSource(res)
          this.getAllProducts();
        },
        error:(err)=>{
          alert("error")
        }
    })
  }

  editProduct(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllProducts();
      }
    })
  }
  deleteProduct(id:number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert("Product deleted successfully");
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting record..")
      }
    })
  }

}
