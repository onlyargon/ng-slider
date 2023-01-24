import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  images = [
    { src: './assets/imgs/image_1.jpg', alt: 'Image 1' },
    { src: './assets/imgs/image_2.jpg', alt: 'Image 2' },
    { src: './assets/imgs/image_3.jpg', alt: 'Image 3' },
  ];
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 3000);
  }

  previous() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  changeSlide(index: number) {
    this.currentIndex = index;
  }
}
