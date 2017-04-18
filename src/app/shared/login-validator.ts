import { FormControl, FormGroup} from '@angular/forms';
export class LoginValidator {
    static validateCredentials(formGroup: FormGroup) {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                    resolve({ shouldBeUnique: true });
                
            }, 1000);
        });
    }
}
