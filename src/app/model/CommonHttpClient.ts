import { HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

export class CommonHttpClient {
    headers;
    urlApi: string;
    urlBase: string;
    urlSpecificDatesStock: string;
    urlReportToView: string;


    constructor(urlBase) {
        this.urlApi = environment.urlApi;
        this.urlBase = urlBase;        
        this.headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }

    protected constructUrlToRequest(urlResource: string): string {
        return this.urlApi + this.urlBase + urlResource;
    }



}