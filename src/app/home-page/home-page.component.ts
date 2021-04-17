import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  categories = [
    {
      title: "Woman",
      imageUrl: "assets/categorywoman.jpg",
    },
    {
      title: "Kids",
      imageUrl: "assets/categorykids.jpg",
    },
    {
      title: "Men",
      imageUrl: "assets/categorymen.jpeg",
    },
  ];

  newArrivals = [
    {
      title: "Knitted Jumper",
      imageUrl: "assets/arrival1.webp",
      price: "$ 30.00",
    },
    {
      title: "White Scarf",
      imageUrl: "assets/arrival2.webp",
      price: "$ 15.00",
    },
    {
      title: "White Shirt",
      imageUrl: "assets/arrival3.webp",
      price: "$ 25.00",
    },
    {
      title: "Colored Shirt",
      imageUrl: "assets/arrival4.webp",
      price: "$ 25.00",
    },
    {
      title: "Blue Shirt",
      imageUrl: "assets/arrival5.webp",
      price: "$ 24.00",
    },
    {
      title: "Glasses",
      imageUrl: "assets/arrival6.webp",
      price: "$ 50.00",
    },
    {
      title: "Women Shirt",
      imageUrl: "assets/arrival7.webp",
      price: "$ 30.00",
    },
    {
      title: "White Sneaker",
      imageUrl: "assets/arrival8.webp",
      price: "$ 35.00",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
