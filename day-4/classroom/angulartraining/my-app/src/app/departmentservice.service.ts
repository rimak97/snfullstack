import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {


  deptdata():string[]{
    return ['IT','HR','DAS','SAP']
  }

  constructor() { }
}
