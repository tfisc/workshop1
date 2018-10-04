import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  currentBuilding: number=0;
  currentX: number=0;
  currentY: number=0;

  constructor() { }
}
