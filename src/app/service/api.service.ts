import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import { Observable }     from 'rxjs/Observable';
import { ResponseData }     from './constructorVariable';

// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

    constructor(private http: Http) {}

    get(url: string):Observable<ResponseData> {
        return this
            .http
            .get(url)
            //.map((response: Response) => response.json());
            .map(this.extractData)
            .catch(this.handleError);
    }

    post(url: string, param:any):Observable<ResponseData> {
        return this
            .http
            .post(url, JSON.stringify(param), new RequestOptions({
                headers: new Headers({"Content-Type": "application/json"})
            }))
            //.map((response: Response) => response.json());
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
            console.error(errMsg);
            return Observable.throw(errMsg);
        }
}
