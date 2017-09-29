import {Injectable} from '@angular/core'
import {GenderType} from './gender'

@Injectable()

export class GenderDropDownService
{
    genderType:GenderType[]=[]

    /**Get the gender type */
    getGenderType()
    {
        return this.genderType=[{
            id:1,
            type:'MR'
        },{
            id:1,
            type:'MRS'
        },{
            id:1,
            type:'Miss'
        }]
    }
}