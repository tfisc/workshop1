import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  professional: boolean = false;
  student: boolean = false;
  formulairePage: boolean=false;

  ngOnInit() {
  }

  name = new FormControl('');

 
}
