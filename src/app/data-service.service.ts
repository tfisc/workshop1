import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currentBuilding: number ;
  currentX: number;
  currentY: number;

  constructor() { }
}
