import { Component, OnInit } from '@angular/core';
import { DepartmentserviceService } from '../departmentservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.css']
})
export class MaincompComponent implements OnInit {
  userdata
  deptdata

  constructor(private us:UserserviceService,private ds:DepartmentserviceService) {
    this.userdata=this.us.userdata()
    this.deptdata=this.ds.deptdata()
   }

  ngOnInit(): void {
  }

}
