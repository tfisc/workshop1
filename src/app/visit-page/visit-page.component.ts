import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrls: ['./visit-page.component.css']
})
export class VisitPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    function fait_piece(nNomPiece,nDescription,nCoordX, nCoordY) {
      this.nomPiece = nNomPiece;
      this.description = nDescription;
      this.coordX = nCoordX;
      this.coordY = nCoordY;

    }


    
  //  var listePieces = new Array(7);
    //listePieces[0] = new fait_piece("VueBatimentCroixVerte","Le batiment croix verte est situé 1027 rue de la croix verte.",0,0);
    //listePieces[1] = new fait_piece("EntreeBatimentCroixVerte","Nous voyons ici l'entrée des artistes !",0,1);



    //let keys = Object.keys(listePiece);
  }


  retourneObjetListePiece(listePieces_i, currentPiece)
      {
        var objet_a_retourner = listePieces_i[0];
        for(var i=0;i<listePieces_i.length;i++)
        {
          if(listePieces_i[i].building == currentPiece.building && listePieces_i[i].coord_x == currentPiece.coord_x && listePieces_i[i].coord_y == currentPiece.coord_y)
          {
            objet_a_retourner = listePieces_i[i];
          }
        }
        return objet_a_retourner;
      }

/*   listePieces: object[] = 
  [{ 'id': "1", "listePiece": ['nomPiece' : "VueBatimentCroixVerte", "Menu item 2", "Menu item 3"] },
    { 'label': "Batiment B", "listItems": ["Menu item 1", "Menu item 2"] }
  
    ] */
    CurrentPiece = {'building':0,'coord_x':0,'coord_y':0};

    listePieces :object[] =[
      {
        'id' : 1,
        'piece' : 'Extérieure du batiment Croix-Verte',
        'description': 'Vue extérieure du batiment Croix-Verte',
        'building':0,
        'coord_x':0,
        'coord_y':0
      },
      {
        'id' : 2,
        'piece' : 'Entrée du batiment Croix-Verte',
        'description': 'Vue de l\'entrée du batiment Croix-Verte',
        'building':0,
        'coord_x':0,
        'coord_y':1
      },
      {
        'id' : 3,
        'piece' : 'Hall d\'entrée du batiment Croix-Verte',
        'description': 'Hall d\'entrée du batiment Croix-Verte',
        'building':0,
        'coord_x':0,
        'coord_y':2
      },
      {
        'id' : 4,
        'piece' : 'HautEscalierCroixVerte',
        'description': '1er étage du batiment Croix-Verte',
        'building':0,
        'coord_x':0,
        'coord_y':3
      },
      {
        'id' : 5,
        'piece' : 'Couloir deservant la cafétaria du batiment Croix-Verte',
        'description': 'Couloir deservant la cafétaria du batiment Croix-Verte',
        'building':0,
        'coord_x':-1,
        'coord_y':3
      },
      {
        'id' : 6,
        'piece' : 'Cafétaria du batiment Croix-Verte',
        'description': 'Cafétaria du batiment Croix-Verte',
        'building':0,
        'coord_x':-2,
        'coord_y':3
      },
      {
        'id' : 7,
        'piece' : 'Couloir deservant les salles de cours',
        'description': 'Couloir deservant les salles de cours',
        'building':0,
        'coord_x':1,
        'coord_y':3
      },
      {
        'id' : 8,
        'piece' : 'Salle de cours Croix-Verte',
        'description': 'Salle de cours Croix-Verte',
        'building':0,
        'coord_x':1,
        'coord_y':4
      },

    ]

    

}
