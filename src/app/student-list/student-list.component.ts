import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddStudentDialogComponent } from "../add-student-dialog/add-student-dialog.component";
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  students = [

  ];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'ผ่าน'},
    {value: 'pizza-1', viewValue: 'ไม่ผ่าน'},
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  addStudent() {
    this.students.push({
      fullname: "ธีระ ทับฤทธิ์",
      numcard: "1-1042-00754-85-9",
      manage: "แก้ไข"

    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width: "1100px",

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("sawasdee");
      this.addStudent();
    });
  }
}
export interface Food {
  value: string;
  viewValue: string;
}
