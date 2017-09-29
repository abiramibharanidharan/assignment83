import {Injectable} from '@angular/core'
import {Student} from './student'
import {GenderType} from './gender'

@Injectable()

export class StudentService
{
    studentList:Student[]=[]

    /**Add  student in the Array List  */
    addStudent(studentDetail:Student)
    {
         this.studentList.unshift(studentDetail)
    }
    
    /**Get the student list from array */
    getStudent():Student[]
    {
          return this.studentList
  }
}