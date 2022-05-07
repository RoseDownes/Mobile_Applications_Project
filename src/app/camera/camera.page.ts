import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public photos: any;
  public base64Image: string;

  constructor(private camera:Camera) { }

  ngOnInit() {
this.photos = [];
  }

  takePhoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options)
    .then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
     this.photos.push(this.base64Image);
     this.photos.reverse();
    }, (err) => {
     // Handle error
    });
  }

  deletePhoto(index){
    this.photos.splice(index, 1); //deletes when clicked 
    //alert("Delete") //testing to see if click works withthe trash icon
  }
}
