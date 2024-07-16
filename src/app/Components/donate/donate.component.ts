import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonateStripeService } from 'src/app/Services/donate-stripe.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
 // donationValue: string = 'Enter Donation Amount Here'!;
  donationValue: number = 1000;

  donateurl:string = 'default';
  donationCurrency:string='USD';
  stringifiedData: any;
  parsedJson: any;
  subscription: boolean = false;

  constructor(private donateStripeService: DonateStripeService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

if(form.value.donate_amount){
  this.donationValue = form.value.donate_amount;
}
else{
  this.donationValue = 500;
}
console.log("Donation Value: "+ this.donationValue);
    this.donationCurrency = form.value.currency;
   // this.subscription = form.value.subscription;

//console.log("subscription status: "+ this.subscription);

    //this.donateurl = 'https://payrequest.me/worldpeacecatalystfund2/'+ this.donationCurrency + '/' + this.donationValue ; - For payrquest.iO

    //For Stripe:


   // this.ValidateEmail(this.emailValue);
   //this.gotoExternalDomain(this.donateurl);

   this.donateStripeService.checkOut(this.donationValue,this.donationCurrency,this.subscription).subscribe ( data =>{
    //console.log(data);
   // this.emailService.storeEmailMC(value,interest).subscribe(data2 => {
      //console.log(data2)
   // })
    //this.pass();
    this.stringifiedData = JSON.stringify(data);
  this.parsedJson = JSON.parse(this.stringifiedData);
   // data = JSON.parse(data);
   //console.log("this is stringified dat: " + this.stringifiedData);
   // console.log("this is parsedJson data: " + this.parsedJson);
   // console.log("resonse url: " + this.parsedJson.url);

   //this.route.navigate([this.parsedJson.url]);
  // this.route.navigateByUrl(this.parsedJson.url);
  window.location.href=this.parsedJson.url;
 
  }) ;



  }

  

  gotoExternalDomain(value:string){
    (window as any).open(value, "_blank");
}

}
