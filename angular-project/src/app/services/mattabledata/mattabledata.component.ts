import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {BackendService} from '../backend.service';

@Component({
  selector: 'mattabledata',
  templateUrl: './mattabledata.component.html',
  styleUrls: ['./mattabledata.component.css']
})
export class MattabledataComponent implements OnInit {

  displayedColumns: string[] = ['SESSION_ID', 'CLS', 'ROLLNO', 'STD_NM','FATH_NM','PERCENT'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private myService:BackendService) {
    
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.myService.getData()); 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
   
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




