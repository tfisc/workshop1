import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';


@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css']
})
export class VisitPageComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
      //Event au changement de la scène
      window.addEventListener('changeScene', (e)=> {
        switch (e['detail'].scene.data.name) {
          case "salleDeCours":
           this.dataService.currentBuilding=0;
           this.dataService.currentX=1;
           this.dataService.currentY=4;
            break;
            case "exterieurBatiment":
           this.dataService.currentBuilding=0;
           this.dataService.currentX=0;
           this.dataService.currentY=0;
            break;
            case "parking":
           this.dataService.currentBuilding=0;
           this.dataService.currentX=0;
           this.dataService.currentY=1;
            break;
            case "Cafet":
           this.dataService.currentBuilding=0;
           this.dataService.currentX=-2;
           this.dataService.currentY=3;
            break;
            case "hautEscalier":
           this.dataService.currentBuilding=0;
           this.dataService.currentX=0;
           this.dataService.currentY=2;
            break;
            case "exterieurBatimentApoth":
            this.dataService.currentBuilding=1;
            this.dataService.currentX=0;
            this.dataService.currentY=0;
             break;
             case "interieurBatimentApoth":
             this.dataService.currentBuilding=1;
             this.dataService.currentX=0;
             this.dataService.currentY=1;
              break;
              case "administration":
              this.dataService.currentBuilding=1;
              this.dataService.currentX=-1;
              this.dataService.currentY=1;
               break;
               case "MYDIL":
               this.dataService.currentBuilding=1;
               this.dataService.currentX=0;
               this.dataService.currentY=2;
                break;

    
          default:
            break;
        }
      });
  }

  ngAfterViewChecked(){
  
  }
  

  retourneObjetListePiece(listePieces_i) {
    var objet_a_retourner = listePieces_i[0];
    for (var i = 0; i < listePieces_i.length; i++) {
      if (listePieces_i[i].building == this.dataService.currentBuilding && listePieces_i[i].coord_x == this.dataService.currentX && listePieces_i[i].coord_y == this.dataService.currentY) {
        objet_a_retourner = listePieces_i[i];
      }
    }
    return objet_a_retourner;
  }

  CurrentPiece = { 'building': 0, 'coord_x': 0, 'coord_y': 0 };

  listePieces: object[] = [
    {
      'id': 1,
      'piece': 'Extérieur du batiment Croix-Verte',
      'description': 'Vue extérieur du batiment Croix-Verte',
      'building': 0,
      'coord_x': 0,
      'coord_y': 0
    },
    {
      'id': 2,
      'piece': 'Parking du batiment Croix-Verte',
      'description': 'Vue du parking du batiment Croix-Verte',
      'building': 0,
      'coord_x': 0,
      'coord_y': 1
    },
    {
      'id': 3,
      'piece': 'Haut escalier batiment croix verte',
      'description': 'Vue intérieur du batiment croix verte',
      'building': 0,
      'coord_x': 0,
      'coord_y': 2
    },
    {
      'id': 4,
      'piece': 'BDE',
      'description': "BDE de l'EPSI",
      'building': 0,
      'coord_x': 0,
      'coord_y': 3
    },
    {
      'id': 5,
      'piece': 'Couloir deservant la cafétaria du batiment Croix-Verte',
      'description': 'Couloir deservant la cafétaria du batiment Croix-Verte',
      'building': 0,
      'coord_x': -1,
      'coord_y': 3
    },
    {
      'id': 6,
      'piece': 'Cafétaria du batiment Croix-Verte',
      'description': 'Cafétaria du batiment Croix-Verte',
      'building': 0,
      'coord_x': -2,
      'coord_y': 3
    },
    {
      'id': 7,
      'piece': 'Couloir deservant les salles de cours',
      'description': 'Couloir deservant les salles de cours',
      'building': 0,
      'coord_x': 1,
      'coord_y': 3
    },
    {
      'id': 8,
      'piece': 'Salle de cours Croix-Verte',
      'description': 'Salle de cours Croix-Verte',
      'building': 0,
      'coord_x': 1,
      'coord_y': 4
    },
    {
      'id': 9,
      'piece': 'Exterieur batiment apothicaire',
      'description': 'Exterieur batiment apothicaire',
      'building': 1,
      'coord_x': 0,
      'coord_y': 0
    },
    {
      'id': 10,
      'piece': 'Interieur batiment apothicaire',
      'description': 'Interieur batiment apothicaire',
      'building': 1,
      'coord_x': 0,
      'coord_y': 1
    },
    {
      'id': 11,
      'piece': 'Administration',
      'description': 'Administration',
      'building': 1,
      'coord_x': -1,
      'coord_y': 1
    },
    {
      'id': 12,
      'piece': 'MYDIL',
      'description': 'MYDIL',
      'building': 1,
      'coord_x': 0,
      'coord_y': 2
    },

  ]

}
