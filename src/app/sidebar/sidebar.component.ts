import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private dataService: DataServiceService) { }

  ngOnInit() {
  }

  currentBuilding;
  currentX;
  currentY;

  menuItems: object[] = [{ 'label': "Batiment Croix Verte", "listItems": ["Vue extérieur","Parking", "Vue intérieur", "BDE","Cafétéria","Salle de cours"] },
  { 'label': "Batiment Apothicaire", "listItems": ["My DIL", "L'incubateur"] }

  ]

  listePieces =[
    {
      'id' : 0,
      'piece' : 'Extérieure du batiment Croix-Verte',
      'description': 'Vue extérieure du batiment Croix-Verte',
      'building':0,
      'coord_x':0,
      'coord_y':0
    },
    {
      'id' : 1,
      'piece' : 'Parking du batiment de la croix verte',
      'description': 'Vue du parking du batiment Croix-Verte',
      'building':0,
      'coord_x':0,
      'coord_y':1
    },
    {
      'id' : 2,
      'piece' : 'Vue interieur',
      'description': 'Vue interieur du batiment Croix-Verte',
      'building':0,
      'coord_x':0,
      'coord_y':2
    },
    {
      'id' : 3,
      'piece' : 'BDE',
      'description': 'BDE du batiment Croix-Verte',
      'building':0,
      'coord_x':0,
      'coord_y':3
    },
    {
      'id' : 4,
      'piece' : 'Cafétaria du batiment Croix-Verte',
      'description': 'Cafétaria du batiment Croix-Verte',
      'building':0,
      'coord_x':-2,
      'coord_y':3
    },
    {
      'id' : 5,
      'piece' : 'Salle de cours Croix-Verte',
      'description': 'Salle de cours Croix-Verte',
      'building':0,
      'coord_x':1,
      'coord_y':4
    },

  ]

  itemInfo(i: number){
    console.log('info sur le click: '+this.listePieces[i].id)
    this.dataService.currentBuilding=this.listePieces[i].building;
    this.dataService.currentX=this.listePieces[i].coord_x;
    this.dataService.currentY=this.listePieces[i].coord_y;
    console.log('current building: '+this.dataService.currentBuilding);
    console.log('current X: '+this.dataService.currentBuilding);
    console.log('current Y: '+this.dataService.currentBuilding);
  }
  getPath( i :number){
    if(i===0){
      return "/visit"
    }else{
      return ""
    }
  }

}
