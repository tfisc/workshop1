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
        console.log("e['detail'].scene.data.name : " + e['detail'].scene.data.name);
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
               case "myDil":
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

  //description_2 = 'Le bâtiment Croix-Verte de l\'EPSI possède un parking permettant aux étudiants, enseignants et intervenants de se garer facilement. \n';
  

  listePieces: object[] = [
    {
      'id': 1,
      'piece': 'Extérieur du batiment Croix-Verte',
      'description': 'Ce bâtiment annexe de l\'EPSI est idéalement situé, à 5 minutes à pied du bâtiment principal situé 437 Avenue des Apothicaires. \n\r Il possède notamment une cafétéria, le bureau des étudiants (BDE) et plusieurs salles de cours.',
      'building': 0,
      'coord_x': 0,
      'coord_y': 0
    },
    {
      'id': 2,
      'piece': 'Parking du batiment Croix-Verte',
      'description': 'Le bâtiment Croix-Verte de l\'EPSI possède un parking permettant aux étudiants, enseignants et intervenants de se garer facilement.',
      'building': 0,
      'coord_x': 0,
      'coord_y': 1
    },
    {
      'id': 3,
      'piece': 'Haut escalier batiment croix verte',
      'description': 'Ici nous sommes au coeur du bâtiment, en effet sur la droite se trouve la cafétéria, derrière nous le bureau des étudiants et sur la gauche les différentes salles de cours.',
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
      'description': 'Nous voilà dans la cafétéria, c\'est ici que l\'on peut prendre un café le matin à la machine automatique ou bien se détendre autour d\'une partie de babyfoot. \r\n Des tables sont également présentes si l\'on souhaite travailler ici. \r\n Il y a aussi un point qui a son importance, nous avons ici un accès aux toilettes.',
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
      'description': 'Nous sommes ici dans l\'une des salles de cours de ce bâtiment. Vous pouvez justement nous apercevoir sur cette photo en train de travailler sur ce site internet ! {Rajouter ici les différents programme de l\'epsi ? http://www.epsi.fr/programmes/panorama-des-etudes/}',
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
