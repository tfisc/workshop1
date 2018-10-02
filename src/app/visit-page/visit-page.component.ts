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
  
    var listePiece = new Array(7);
    listePiece[0] = new fait_piece("VueBatimentCroixVerte","Le batiment croix verte est situé 1027 rue de la croix verte.",0,0);
    listePiece[1] = new fait_piece("EntreeBatimentCroixVerte","Nous voyons ici l'entrée des artistes !",0,1);

  }

  

}
