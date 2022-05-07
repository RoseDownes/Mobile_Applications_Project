import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DogsService } from '../Services/dogs.service';
@Component({
  selector: 'app-random-dog',
  templateUrl: './random-dog.page.html',
  styleUrls: ['./random-dog.page.scss'],
})

export class RandomDogPage implements OnInit {
  @ViewChild('dogFact') dogFactElement:ElementRef;
  DogData:any =[];
  randomDog: any;

  constructor(private dogsService:DogsService) { }

  ngOnInit() {
    this.dogsService.GetDogData().subscribe(
      (data)=>{
        this.DogData = data;
        console.log(this.DogData);
   }
    )
    }
  RandomDog(){
    var loc = Math.floor(Math.random() * this.DogData.length)
    this.randomDog = this.DogData[loc];
    console.log(this.randomDog);
    this.dogFactElement.nativeElement.insertAdjacentHTML
    ('afterbegin', '<div id="dogFact" class="dogFact"><h1>' + this.randomDog.name + '</h1><p> Temperament is '
     + this.randomDog.temperament  +'</p><img src="'+ this.randomDog.image.url + '"></div> ');  

  }


}
