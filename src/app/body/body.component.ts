import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;
  currentDate: string;
  imagePathBase: string;
  badged: number = 0;
  notificationListe: any=[];
  myUser: any;
 
  constructor(private service:ServiceService,private _router:Router) { 
    // this.imagePathBase = this.service.imagePathBase 
    this.imagePathBase = "../.."
    const date = new Date();
    this.notify();
    _router.events.subscribe(val => {
    console.log("change Route");
    this.notify();
    })


    
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
this.currentDate = `${day}-${month}-${year}`;
// console.log(currentDate);
  }

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }

  read(){
//     for(let ele1 of this.myUser.notifications){
//       ele1.read = true;
//     }
// this.service.saveNotification(this.myUser.notifications).subscribe(res=>{console.log(res)} ,err=>console.log(err))
  }

  notify(){
  //   this.service.getUser(JSON.parse(<string>localStorage.getItem('user')).id).subscribe(res=>{
  //     this.notificationListe = []
  //     this.badged = 0
  //     this.myUser = res;
  // for(let ele1 of res.notifications){
  // if(ele1.read == false){
  //   this.badged++;
  //   this.notificationListe.push(
  //     {
  //       type:ele1.type,
  //       intitule:ele1.intitule,
  //       sendedBy:ele1.sended_by,
  //       sendedAt:ele1.sended_at,
  //       content:ele1.content
  //     }
  //   )
  // }
  // }


      
  //     console.log("wa brahim")
  //     // localStorage.setItem('user',JSON.stringify(res));
  //   },err=>
  //     {  if(err.error.error.includes('The Token has expired on')){
  //       this._router.navigateByUrl('/login'); 
  //     }}
  //     )
  }

}
