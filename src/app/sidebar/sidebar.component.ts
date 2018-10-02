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

  menuItems: object[] = [{ 'label': "Batiment A", "listItems": ["Menu item 1", "Menu item 2", "Menu item 3"] },
  { 'label': "Batiment B", "listItems": ["Menu item 1", "Menu item 2"] }

  ]


}
