import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pet-image',
  templateUrl: './pet-image.component.html',
  styleUrls: ['./pet-image.component.scss']
})
export class PetComponent implements OnInit{
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }

  // tslint:disable-next-line:typedef
  updateName(name) {
    this.petName = name;
  }

  // tslint:disable-next-line:typedef
  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
