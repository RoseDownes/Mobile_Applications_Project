import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-dog-status',
  templateUrl: './dog-status.page.html',
  styleUrls: ['./dog-status.page.scss'],
})
export class DogStatusPage implements OnInit {
 
  myStatus:string = "";
  favDog:string;
  constructor(private storage:Storage) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('status'),
      this.storage.get('favdog')
      .then((status)=>{
        this.myStatus = status;
        this.favDog = status;
      })
      .catch();
    })
    .catch();
  }
  SaveSatus(){
    this.storage.create()
    .then(()=>{
      this.storage.set("status", this.myStatus),
      this.storage.set("favdog", this.favDog)
      .then(()=>{console.log(this.myStatus); console.log(this.favDog)})
      .catch();
    }).
    catch();
  }
}
