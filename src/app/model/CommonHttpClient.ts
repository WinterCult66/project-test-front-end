import { HttpHeaders } from "@angular/common/http";


export class CommonHttpClient {
    headers;
    urlApi: string;

    constructor(urlApi) {
        this.urlApi = urlApi;
        this.headers = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
    }

    protected constructUrlToRequest(urlResource: string): string {
        return this.urlApi + urlResource;
    }



}