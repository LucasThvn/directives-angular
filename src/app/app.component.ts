import { Component } from "@angular/core";

interface movie{
  title:string;
  picture:string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "Raclette Party";

  isThisIngredientVital: boolean = true;
  displayGuestList: boolean = false;
  isAdmin: boolean = true;
  showMovies: boolean = true;

  songList: string[] = [
    "Alejandro",
    "Ne me quitte pas",
    "Le temps est bon",
    "Bonjour !"
  ];

  movieList: movie[] = [
    {
      title: "The Godfather [Film Series]",
      picture: "https://www.listchallenges.com/f/items/c8c693e5-c06c-456c-ab66-40cf4ee7ba47.jpg",
    },
    {
      title: "The Shawshank Redemption (1994)",
      picture: "https://www.listchallenges.com/f/items2020/783c1e5d-4598-49d1-8f13-7d0de96dc398.jpg",
    },
    {
      title: "Gone With the Wind (1939)",
      picture: "https://www.listchallenges.com/f/items2020/d8c146be-ef32-49b5-86bc-d1ab2ceb6fb6.jpg",
    },
    {
      title: "Casablanca (1942)",
      picture: "https://www.listchallenges.com/f/items2020/8bb5d09e-f8a9-4998-95bb-b3d2c52bdb94.jpg",
    },
    {
      title: "It's a Wonderful Life (1946)",
      picture: "https://www.listchallenges.com/f/items2020/bd6c3336-48d6-44c5-961b-53df4e79e04d.jpg",
    },
    {
      title: "Schindler's List (1993)",
      picture: "https://www.listchallenges.com/f/items2020/8a053f32-ccf4-41a0-9151-7a60f6e696ed.jpg",
    },
  ]
}
