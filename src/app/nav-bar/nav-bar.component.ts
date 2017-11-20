import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {

  constructor(private afAuth:AngularFireAuth) { 
    afAuth.authState.subscribe(x=>console.log(x));
  }


logout(){
this.afAuth.auth.signOut();
}

}
