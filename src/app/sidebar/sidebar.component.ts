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

  menuItems: object[] = [{ 'label': "Navigation 3D", "route":"/visit"  },{ 'label': "Formations", "route":"/formations"  }
  ]

  

  getPath( i :number){
    if(i===0){
      return "/visit"
    }else{
      return ""
    }
  }

}
