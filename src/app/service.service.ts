import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  private apiUrl = 'http://localhost:8080';

  public imagePathBase = '../..';
  // public imagePathBase = '/dashbord';

  constructor(private httpClient: HttpClient) { 
  }
  private accesTocken = localStorage.getItem("access_token");
  // private  refresh_token= localStorage.getItem("refresh_token");
  private options2 = {
    headers: new HttpHeaders().set('Authorization', "Bearer " + this.accesTocken)
};
  private habilitations:any = []
  private pages:any = []
  private folders:any = []
  // private  options2 = {
  //   headers: new HttpHeaders().set('Authorization', "Bearer " + this.accesTocken)
  // };


  buisness(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
  
    return this.httpClient.get<any>(`${this.apiUrl}/businesses`, { params });
  }
  

  getBuisnesses(){
    return this.httpClient.get<any>(`${this.apiUrl}/businesses/getall`);

  }


  findBusinessesByUserId(id:any){
    return this.httpClient.get<any>(`${this.apiUrl}/businesses/findBusinessesByUserId/1`);

  }

  
  getSousTraitantsBybuisenssid(id){
    return this.httpClient.get<any>(`${this.apiUrl}/SousTraitance/getSousTraitanceBybuisenssid/${id}`);
  }
  createsSoustraitance(data){
    return this.httpClient.post<any>(`${this.apiUrl}/SousTraitance/createsSoustraitance`,data);
  }
  getSousTraitanceBySousTraitantID(id){
    return this.httpClient.get<any>(`${this.apiUrl}/SousTraitance/getSousTraitanceBySousTraitantID/${id}`);
  }

  GetAllSousTraitances(){
    return this.httpClient.get<any>(`${this.apiUrl}/SousTraitance/GetAllSousTraitances`);
  }

  getAllSousTraitant(){
    return this.httpClient.get<any>(`${this.apiUrl}/SousTraitant`);
  }


  findByFactureAndStep(factureid,stepId){
    return this.httpClient.get<any>(`${this.apiUrl}/factureStepFields/findByFactureAndStep/${factureid}/${stepId}`);
  }



  createsFacture(data){
    return this.httpClient.post<any>(`${this.apiUrl}/factures/create`,data);
  }

  
  getFacturesBySousTraitance(data){
    return this.httpClient.get<any>(`${this.apiUrl}/factures/getFacturesBySousTraitance/${data}`,);
  }

  getDivisionByPoleId(id){
    return this.httpClient.get<any>(`${this.apiUrl}/Division/getDivisionByPoleId/${id}`);
  }


  poles(){
    return this.httpClient.get<any>(`${this.apiUrl}/poles`);
  }


  getFacturesByBusinessAndSousTraitance(businessId: number, soustraitanceId: number): Observable<any> {
    const params = new HttpParams()
      .set('businessId', businessId.toString())
      .set('soustraitantId', soustraitanceId.toString());
  
    return this.httpClient.get<any>(`${this.apiUrl}/factures/by-business-and-soustraitant`, { params });
  }
  

  
}
