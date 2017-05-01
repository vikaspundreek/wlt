
import { FormControl, FormGroup} from '@angular/forms';
export class PasswordValidator {
    static complexPassword(control:FormControl){
        const minLength = 8;

        if (control.value == '')
            return null;

          if (control.value.length < minLength)
            return { complexPassword: {minLength:minLength} }

        return null;
    }
    static confirmPasswordMatch(group: FormGroup) {
        var userPassword = group.controls.userPassword.value;
        var confirmPassword = group.controls.confirmPassword.value;
        
        // If either of these fields is empty, the validation 
        // will be bypassed. We expect the required validator to be 
        // applied first. 
        if (userPassword == '' || confirmPassword == '')
            return null;
        
        if (userPassword != confirmPassword)
            return { confirmPasswordMatch: true };
            
        return null;
    }
}