import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';


//import {} from '@mailchimp/mailchimp_marketing' ;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  jsonObject!: JSON;
  curDate!: Date;

  ft!: number;
  rc!: number;
  wp!: number;
  al!: number;
  e!: number;
  nl!: number;
  b!: number;
  c!: number;


  list_id!: string;
  api_key!: string;
  api_server!: string;

  constructor(private httpClient: HttpClient) { 

 


  }
  unsubscribe(email:string){


  
    const ep6 = "/api/unsubscribe";
 



    const message2=
    {
    //members:{
       date: this.curDate ,   
       email_address: email 
      // status: "subscribe" ,
      // ft: this.ft,
      // rc:this.rc,
      // wp:this.wp,   
      //}
  
   }
   

   const httpHeaders2 = new HttpHeaders();
   httpHeaders2.append('content-type','application/json');

  
    return this.httpClient.post(ep6,message2,{headers:httpHeaders2}) ;
  

  }
  
  //I think storeEmailMC is for mailchimp email
  storeEmailMC(email:string, interest: string){


    const ep4 = "/api/getData";
    const ep5 = "/api/subscribe";
    this.ft=0;
    this.rc=0;
    this.wp=0;
    this.al=0;



 if(interest == "FT"){
   this.ft=1;
 }
 else if (interest == "RC"){
   this.rc = 1;
 }
 else if (interest == "WP"){
   this.wp=1
 }
 else if (interest == "AL"){
  this.al=1
}


    const message2=
    {
    //members:{
       //date: this.curDate ,   
       email_address: email ,
       status: "subscribe" ,
       ft: this.ft,
       rc:this.rc,
       wp:this.wp,
       al:this.al
         
      //}
  
   }
   

   const httpHeaders2 = new HttpHeaders();
   httpHeaders2.append('content-type','application/json');

  
    return this.httpClient.post(ep5,message2,{headers:httpHeaders2}) ;
  

  }

  //storeEmail is for Firebase email
storeEmail(hash: string,email: string,interest: string){



  
 this.curDate = new Date();

 this.ft=0;
 this.rc=0;
 this.wp=0;
 this.al=0;
 this.e=1;
 this.nl =0;
 this.b = 0;
 this.c=0;
 



 if(interest == "NL"){
   this.nl=1;
 }
 else if (interest == "RC"){
   this.rc = 1;
 }
 else if (interest == "WP"){
   this.wp=1
 }
 else if (interest == "AL"){
  this.al=1
}

 

  const message=
   {
    
      date: this.curDate ,   
      email: email ,
      //ft: this.ft,
      //rc:this.rc,
      //wp:this.wp, 
     // al:this.al,  
      nl:this.nl,
      un:0,
      e:this.e,
     // b:this.b,
      c:this.c

  }


 
 
  const httpHeaders = new HttpHeaders();
  httpHeaders.append('content-type','application/json');
  httpHeaders.append('Authentication','basic password1234');

  const ep = "https://ghost-writer-alpha.firebaseio.com/emails.json";
  const ep2 = "/api/subscribeFB";
 
  
  
  
  
  return this.httpClient.post(ep2,message,{headers:httpHeaders}) ;

 
  


}



}
