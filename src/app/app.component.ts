import { Component,OnInit } from '@angular/core';
import {StudentService} from './student.service'
import {Student} from './student'
import {GenderType} from './gender'
import {GenderDropDownService} from './gendere-dropdown.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent implements OnInit
{
   studentArray:Student[]=[]
   genderType:GenderType[]=[]
   
   id:number
   name:string
   gender:string
   studentDetail:Student
   
   constructor(public _studentService:StudentService,public _genderDropDown:GenderDropDownService) {}
   
   ngOnInit()
   {
   this.genderType=this._genderDropDown.getGenderType()  
    }

    addStudent(idnum,first,gender)
    {
      
      this.studentDetail={
        id:idnum,
        name:first,
        gender:gender
        }
      
       this._studentService.addStudent(this.studentDetail)
       this.studentArray=this._studentService.getStudent();
    }

}
