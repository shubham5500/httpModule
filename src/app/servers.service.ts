import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerService{
    constructor(private http: Http) {
        
    }

    storeServer(servers: any[]){
        return this.http.post('https://testingapp-3fb7a.firebaseio.com/server-data.json', servers);
    }

    getServers(){
        return this.http.get('https://testingapp-3fb7a.firebaseio.com/server-data.jso').map(
            (response)=>{
                const data = response.json();;
                return data; 
            }
        )
        //This catch block is just to transform the error if we want otherwise it'll guve the default error written in the backend
        // .catch(
        //     (error)=>{
        //         return Observable.throw('Something went wrong');
        //     }
        // );
    }

    getAppName(){
        return this.http.get('https://testingapp-3fb7a.firebaseio.com/appName.json')
                    .map(
                        (response)=>{
                            return response.json();
                        }
                    )
    }
}