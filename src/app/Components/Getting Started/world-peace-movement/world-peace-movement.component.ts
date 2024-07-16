import { Component, OnInit } from '@angular/core';
//import {Md5} from 'ts-md5/dist/md5'
import { EmailService } from 'src/app/Services/email.service';
import { NgForm } from '@angular/forms';
import {Md5} from 'ts-md5';

@Component({
  selector: 'app-world-peace-movement',
  templateUrl: './world-peace-movement.component.html',
  styleUrls: ['./world-peace-movement.component.css']
})
export class WorldPeaceMovementComponent implements OnInit {
  emailValue: string = 'Enter Email Address Here'!;

  constructor(private emailService: EmailService) { }

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
          const interest = "WP"
         

          this.emailService.storeEmail(hash,value,interest).subscribe ( data =>{
            //console.log(data);
           // this.emailService.storeEmailMC(value,interest).subscribe(data2 => {
              //console.log(data2)
           // })
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


  const failelement = document.getElementById("fail")!;
  

  failelement.style.display ="block";
  failelement.style.transitionDelay = "10s";
  $(failelement).fadeOut(6000);


  

}
 pass()
{
 
 


   const succelement = document.getElementById("succ")!;
  

   succelement.style.display ="block";
   succelement.style.transitionDelay = "10s";
   $(succelement).fadeOut(6000);

}

}
