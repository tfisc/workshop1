import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuItems: object[] = [{ 'label': "Batiment Croix Verte", "listItems": ["Vue extérieur","Parking", "Vue intérieur", "BDE","Cafétéria","Salle de cours"] },
  { 'label': "Batiment Apothicaire", "listItems": ["My DIL", "L'incubateur"] }

  ]

  getPath( i :number){
    if(i===0){
      return "/visit"
    }else{
      return ""
    }
  }

}
