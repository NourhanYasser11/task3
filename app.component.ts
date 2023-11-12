import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
 event:any= "";
textdata="";
  viewname="nourhan";
  getname(){
    return this.viewname;
  }
  onclickbtn(event:any){
  console.log(event);
  }
}
