import {Student} from './student'
import {Component,OnInit,Input} from '@angular/core'

@Component({
    selector:'studentlist',
    templateUrl:'./studentlist.html',
    styleUrls:['./studentlist.css']

})

export class StudentComponent implements OnInit {
    @Input()studentDetail;

    studentList:Student;
    constructor(){}
    ngOnInit(){}
}