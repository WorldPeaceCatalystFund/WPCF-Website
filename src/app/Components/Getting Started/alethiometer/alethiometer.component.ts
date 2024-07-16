import { Component, OnInit } from '@angular/core';
//import {Md5} from 'ts-md5/dist/md5'
import { EmailService } from 'src/app/Services/email.service';
import { NgForm } from '@angular/forms';
import {Md5} from 'ts-md5';


@Component({
  selector: 'app-alethiometer',
  templateUrl: './alethiometer.component.html',
  styleUrls: ['./alethiometer.component.css']
})
export class AlethiometerComponent implements OnInit {
  emailValue: string = 'Enter Email Address Here'!;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emailValue = "";
  }

  onSubmit(form:NgForm){

    this.emailValue = form.value.email_add;

    /*this.emailValue = Object.values(form.value);
    */
     //console.log(this.emailValue)
    this.ValidateEmail(this.emailValue);
   



  }

  ValidateEmail(value:string) 
{
    /*if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
   
    /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$/
    */
    //console.log(value)
    var emailReg =   /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
    
    //console.log(emailReg.test(value))
    if (emailReg.test(value))
        {


          const hash = Md5.hashStr(value);
          const interest = "AL"
          this.emailService.storeEmail(hash,value,interest).subscribe ( data =>{
           // console.log(data);
            this.pass();

          }) ;

                  
          return (true);
        }
    else{
   
          this.fail();
          return (false);
          }
} 
 fail()
{
  /*(document.getElementById("fail") as HTMLFormElement)['finish']().show().delay(1000).fadeOut(6000);
*/

  const failelement = document.getElementById("fail")!;
  

  failelement.style.display ="block";
  failelement.style.transitionDelay = "10s";
  $(failelement).fadeOut(6000);
  //console.log("Failed")

  

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
