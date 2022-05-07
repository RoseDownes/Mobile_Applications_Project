import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myStatus:string = "";
  favDog:string;
  dogPic:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ox_w6yD7orEOhno749ye1ie8FjKrQkjEsA&usqp=CAU";
  constructor(private storage:Storage, private camera: Camera) {}

  ionViewWillEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('status')
      .then((status)=>{
        this.myStatus = status;
        if(this.myStatus=="Not a fan of Dogs"){
            this.dogPic = "https://www.petmd.com/sites/default/files/2021-11/sad-dog.jpg";
        }else if(this.myStatus == "I Love Dogs" ){
          this.dogPic = "https://i.pinimg.com/originals/5f/f7/f9/5ff7f9a665f80b364907b4f152606135.jpg";
        }else{
          this.dogPic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ox_w6yD7orEOhno749ye1ie8FjKrQkjEsA&usqp=CAU";
        }
      })
      .catch();
    })
    .catch();
  }
  ionViewDidEnter(){
    this.storage.create()
    .then(()=>{
      this.storage.get('favdog')
      .then((status)=>{
        this.favDog = status;
      })
      .catch();
    })
    .catch();
  }


}
