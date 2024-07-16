import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonateStripeService {

  constructor(private httpClient: HttpClient) { }

  checkOut(priceAmount:any,currency:string,subscriptionStatus:boolean){

    const ep = "/api/create-checkout-session";
    const message2=
    {
    //members:{
       //date: this.curDate ,  
       priceAmount: priceAmount,
       currCode: currency, 
       modeType:subscriptionStatus,
    }

    //console.log(priceAmount);
   const httpHeaders2 = new HttpHeaders();
   httpHeaders2.append('content-type','application/json');

  
    return this.httpClient.post(ep,message2,{headers:httpHeaders2}) ;
  

}
}

