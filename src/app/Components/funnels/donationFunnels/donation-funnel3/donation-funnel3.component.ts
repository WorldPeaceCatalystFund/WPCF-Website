import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donation-funnel3',
  templateUrl: './donation-funnel3.component.html',
  styleUrls: ['./donation-funnel3.component.css']
})
export class DonationFunnel3Component implements OnInit {
  donationValue: string = 'Enter Donation Amount Here'!;
  donateurl:string = 'default';
  donationCurrency:string='USD';
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){

    this.donationValue = form.value.donate_amount;
    this.donationCurrency = form.value.currency;

    this.donateurl = 'https://payrequest.me/worldpeacecatalystfund2/'+ this.donationCurrency + '/' + this.donationValue ;

   // this.ValidateEmail(this.emailValue);
   this.gotoExternalDomain(this.donateurl);



  }

  gotoExternalDomain(value:string){
    (window as any).open(value, "_blank");
}


}
