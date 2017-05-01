import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {
  private config = null;

  constructor(private http: Http) {  

  }

  public configuration(){
      return this.config;
    }

      // Retrieve a configuration object or parameter using a "magic string" key
    public getConfig(key: any) {
        return this.config[key];
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('/config/config.development.json')
                .map(res => res.json())
                .catch((error:any) => {
                    resolve(true); 
                    return Observable.throw(error.json().error || 'Server error');
                }).subscribe((responseData) => {
                    this.config = responseData; 
                    resolve(true);
                });
        });
       
    }

}

 