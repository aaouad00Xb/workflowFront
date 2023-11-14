import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-descriptifs',
  templateUrl: './descriptifs.component.html',
  styleUrls: ['./descriptifs.component.css']
})
export class DescriptifsComponent implements OnInit {
  businesses: any=[];
  currentPage: any ;
  itemsPerPage: any;
  selectedFactures: any=[];
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  


  constructor(private service:ServiceService){
    this.currentPage =0;   // Current page number
    this.itemsPerPage = 10;
    this.loadPaginatedData(this.currentPage, this.itemsPerPage);


  }

  selectBuisness(i:any){
    this.selectedBuisness =  this.businesses[i]
  console.log(this.selectedBuisness);
  }

  totalItems=0
  selectedBuisness:any={
    businessID:0,
    sousTraitants:[],
  }

  ngOnInit(): void {
    this.businesses = []
 
  
    // Number of items per page
  }
  

  getSoutraitents(id:any){

    this.service.getFacturesByBusinessAndSousTraitance(this.selectedBuisness.businessID,id).subscribe(
      res=>{
        this.selectedFactures = res;
      },err=>{
        console.log(err)
      }
    )  }



  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get visibleBusinesses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.businesses.slice(startIndex, endIndex);
  }

  loadPaginatedData(page: number, size: number) {
    this.service.buisness(page, size)
      .subscribe((response: any) => {
        this.businesses = response.content;
        this.currentPage = page;
        this.itemsPerPage = size;
        this.totalItems = response.totalElements;
        console.log(this.businesses)
      });
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadPaginatedData(this.currentPage + 1, this.itemsPerPage);
    }
  }
  
  prevPage() {
    if (this.currentPage > 1) {
      this.loadPaginatedData(this.currentPage - 1, this.itemsPerPage);
    }
  }
  
}


