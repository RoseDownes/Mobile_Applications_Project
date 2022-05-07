import { Component, OnInit } from '@angular/core';
import { DogsService } from '../Services/dogs.service';

@Component({
  selector: 'app-dogs-page',
  templateUrl: './dogs-page.page.html',
  styleUrls: ['./dogs-page.page.scss'],
})
export class DogsPagePage implements OnInit {
  DogData:any =[];
  searchTerm: string;
  constructor(private dogsService:DogsService) { }

  ngOnInit() {
    this.dogsService.GetDogData().subscribe(
      (data)=>{
        this.DogData = data;
        console.log(this.DogData);
      }
    )
  }

}
