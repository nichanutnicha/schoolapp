import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  fileSelected = null;
  filesMulti = [];
  isshow = true;
  studentdata = {};



  constructor(public dialogRef: MatDialogRef<AddStudentDialogComponent>, private _formBuilder: FormBuilder) {
  }
  detectFiles(ev) {
    var files: Array<any> = ev.target.files;
    console.log(files.length);
    if (files) {
      this.fileSelected = files[0].name;
      Array.from(files).forEach((file: any) => {
        console.log(file.name);
        this.filesMulti.push(file);
      });

    }

  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  aa() {
    this.dialogRef.close();
  }

  selectionChange(ev) {
    if (ev.selectedIndex === 2) {
      console.log("hilml");
      const intervalId = setInterval(() => {
        this.isshow = false;
        this.studentdata = {
          fullname: "ธีระ ทับฤทธิ์",
          sex: "ชาย",
          nationality: "ไทย",
          id: "1-1042-00754-85-9",
          birthdate: "17 สิงหาคม พ.ศ.2553",
          birthtime: "16.11 น.",
          placebirth: "โรงพยาบาลบี.แคร์ เมดิคอลเซ็นเตอร์ 29 หมู่ที่ 6 แขวงสายไหม เขตสายไหม กทม.",
          numson: "1",
          doctor: "แพทย์แผนปัจจุบัน",
          weight: "3.160 กรัม",
          registerhome: "แขวงสายไหม เขตสายไหม กทม.",
          fullnamemother: "น.ส.กันทมา โสภกุล",
          idmother: "3-3008-00165-72-3",
          agemother: "29 ปี",
          fullnamefather: "นายธีรศักดิ์ ทับฤทธิ์",
          idfather: "3-1802-00336-92-8",
          agefather: "33 ปี"
        };
      }, 3000);
    }
  }

}
