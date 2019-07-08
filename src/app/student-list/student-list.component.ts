import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddStudentDialogComponent } from "../add-student-dialog/add-student-dialog.component";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  students = [

  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }
  addStudent() {
    this.students.push({
      fullname: "ธีระ ทับฤทธิ์",
      numcard: "1-1042-00754-85-9",
      status: "ผ่าน",
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
