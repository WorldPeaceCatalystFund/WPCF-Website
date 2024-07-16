import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Md5} from 'ts-md5';

import { EmailService } from 'src/app/Services/email.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {
  emailValue: string = 'Enter Email Address Here'!;

  constructor(private emailService: EmailService, private route:Router) { }

  ngOnInit(): void {
    this.emailValue = "";
  }
  onSubmit(form:NgForm){

    this.emailValue = form.value.email_add;

  
    this.ValidateEmail(this.emailValue);
   



  }

  ValidateEmail(value:string) 
{
    
    var emailReg =   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    
   
    if (emailReg.test(value))
        {


          const hash = Md5.hashStr(value);
          const interest = "NL"
         
          this.emailService.unsubscribe(value).subscribe ( data =>{
            //console.log(data);
            //this.emailService.storeEmailMC(value,interest).subscribe(data2 => {
              //console.log(data2)
            //          }            )
            this.pass();

          }) ;
          this.route.navigate(['unsubscribeThankyou']);

                  
          return (true);
        }
    else{
   
          this.fail();
          return (false);
          }
} 
 fail()
{
  

  const failelement = document.getElementById("fail")!;
  

  failelement.style.display ="block";
  failelement.style.transitionDelay = "10s";
  $(failelement).fadeOut(6000);


  

}
 pass()
{
 
   /*(document.getElementById("succ") as HTMLFormElement)['finish']().show().delay(1000).fadeOut(6000);
   */


   const succelement = document.getElementById("succ")!;
  

   succelement.style.display ="block";
   succelement.style.transitionDelay = "10s";
   $(succelement).fadeOut(6000);
   //console.log("Passed")

}

}
