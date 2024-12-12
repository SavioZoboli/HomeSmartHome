import { AbstractControl, ValidationErrors } from "@angular/forms";

export class WhiteSpaceValiator{
    static semEspacoEmBranco(control:AbstractControl):ValidationErrors|null{
        if((control.value as String).indexOf(' ')!=-1){
            return {cannotContainSpace:true};
        }
        return null;
    }
}