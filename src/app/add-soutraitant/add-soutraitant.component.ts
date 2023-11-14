import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-soutraitant',
  templateUrl: './add-soutraitant.component.html',
  styleUrls: ['./add-soutraitant.component.css']
})
export class AddSoutraitantComponent{
  factureForm!: FormGroup;
  businesses: any[]=[]; // Replace with your Business model
  sousTraitants: any[]=[] // Replace with your SousTraitant model
  poles: any=[];
  divisions: any;
  selectedFactures: any;
  projectManagerID: any;
  soustraitence: any;
  soustraitance: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.findBusinessesByUserId()
    this.getAllSousTraitant()
    this.initForm();
    // this.loadBusinesses(); // Load the list of businesses
  }

  initForm(): void {
    this.factureForm = this.formBuilder.group({
      divisions: [null, Validators.required],
      poles: [null, Validators.required],
      business: [null, Validators.required],
      sousTraitant: [null, Validators.required],
      factureNumber: [''],
      factureDate: [''],
      totalAmount: [''],
      currentStep: [''],
      projectManager: ['']
    });
  }

  // loadBusinesses(): void {
  //   // Fetch the list of businesses from your service
  //   this.service.getBuisnesses().subscribe(res=>{
  //     console.log(res)
  //     this.businesses =res
  //   },err=>{
  //     console.log(err)
  //   });
  // }


  // loadPoles(): void {
  //   // Fetch the list of businesses from your service
  //   this.service.poles().subscribe(res=>{
  //     console.log(res)
  //     this.poles =res
  //   },err=>{
  //     console.log(err)
  //   });
  // }


  getProjectManager(){

    if(this.factureForm.get('business').value){
      for(let ele of this.factureForm.get('business').value.userList    ){
        if(ele.role == "PROJECT_MANAGER"){
          this.projectManagerID = ele.id
          return ele.name
        }
      }
    }
  }

  onBusinessChange(): void {
    // Handle business selection change
    const selectedBusinessId = this.factureForm.get('business').value.businessID;
  }

  findBusinessesByUserId(): void {
    this.service.findBusinessesByUserId(1).subscribe(
      res=>{
      console.log(res);
      this.businesses =res
    },
    err=>{
      console.log(err);
    })
  }

  sousTraitantChange(){
    this.getSousTraitanceBySousTraitantID()
  }

  getSousTraitanceBySousTraitantID(): void {
    this.service.getSousTraitanceBySousTraitantID(this.factureForm.get('sousTraitant').value).subscribe(
      res=>{
      console.log(res);
      this.soustraitance = res;
    },
    err=>{
      console.log(err);
    })
  }


  getAllSousTraitant(): void {
  
    this.service.getAllSousTraitant().subscribe(
      res=>{

      console.error(res);
      this.sousTraitants = res;

    },
    err=>{
      console.log(err);
    })   
  }


  onSubmit(f): void {
    console.log(f.value)
     let obj = {...f.value}
     obj['titulaire']  = this.factureForm.get('sousTraitant').value
     obj['buisness'] = this.factureForm.get('business').value.businessID


     console.log(obj);
         //   let obj = {
    //   business:this.factureForm.get('business').value.businessID,
    //   sousTraitant:this.factureForm.get('sousTraitant').value?.id,
    //   projectManager:this.projectManagerID
    // }

    // Object.assign(obj, f.value);
    //     console.log(obj)

    this.service.createsSoustraitance(obj).subscribe((response) => {
      console.log(response)
    },err=> console.error(err)
    );
  }
}
