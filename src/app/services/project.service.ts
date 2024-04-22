import { Injectable } from '@angular/core';
import {
  Memorial,
  MemorialDesc,
  Peaseresort,
  PeaseresortDesc,
  Trussardishop,
  TrussardishopDesc,
  Wonderland,
  WonderlandDesc,
  sampleProjects,
} from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  showDialog = false;
  constructor() {}

  getAll() {
    return sampleProjects;
  }

  getWondelandProject() {
    return Wonderland;
  }

  getPeaseResort() {
    return Peaseresort;
  }

  getMemorial() {
    return Memorial;
  }

  getTrussardiShop() {
    return Trussardishop;
  }
  getMdescription() {
    return MemorialDesc;
  }
  getWDescription() {
    return WonderlandDesc;
  }
  getTDescription() {
    return TrussardishopDesc;
  }
  getPDescription() {
    return PeaseresortDesc;
  }
}
