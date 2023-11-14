import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-suivi-factures',
  templateUrl: './suivi-factures.component.html',
  styleUrls: ['./suivi-factures.component.css']
})
export class SuiviFacturesComponent {
  factureForm!: FormGroup;
  businesses: any[]=[]; // Replace with your Business model
  sousTraitants: any[]=[] // Replace with your SousTraitant model
  poles: any=[];
  divisions: any;
  selectedFactures: any;
  projectManagerID: any;
  currentStepId: any;
  stepFieldsList: any=[];

  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.loadBusinesses(); // Load the list of businesses
    this.loadPoles(); // Load the list of businesses
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

  loadBusinesses(): void {
    // Fetch the list of businesses from your service
    this.service.getBuisnesses().subscribe(res=>{
      console.log(res)
      this.businesses =res
    },err=>{
      console.log(err)
    });
  }


  loadPoles(): void {
    // Fetch the list of businesses from your service
    this.service.poles().subscribe(res=>{
      console.log(res)
      this.poles =res
    },err=>{
      console.log(err)
    });
  }


  getStepFields(facture,step){
    this.stepFieldsList = []
    this.currentStepId = step

    if(facture && step)
    this.service.findByFactureAndStep(facture,step).subscribe(res=>{
      console.log(res)
      this.stepFieldsList = res;
    },
    err=>
    console.log(err))
   
  }

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

  getFactures(){

    this.service.getFacturesByBusinessAndSousTraitance(this.factureForm.get('business').value.businessID,this.factureForm.get('sousTraitant').value?.id).subscribe(
      res=>{
        this.selectedFactures = res;
        
      },err=>{
        console.log(err)
      }
    )  }


  // onStraitanthange(): void {
  //   // Handle business selection change
  //    = this.factureForm.get('sousTraitant').value
 
  //   // You can also load other related data here
  // }


  onBusinessChange(): void {
    // Handle business selection change
    const selectedBusinessId = this.factureForm.get('business').value.businessID;
    // Fetch related SousTraitants and other data based on the selected business
   this.service.getSousTraitantsBybuisenssid(selectedBusinessId).subscribe(
    res=>{
      this.sousTraitants = res
    },err=>console.log(err)
   );
    // You can also load other related data here
  }

  onPoleChange(): void {
    // Handle business selection change
    const selectedPole = this.factureForm.get('poles').value;
    // Fetch related SousTraitants and other data based on the selected business
    console.log(selectedPole)
    this.divisions = selectedPole.divisions
    // You can also load other related data here
  }

  onChangeDivision(): void {
    // Handle business selection change
    const selectedPole = this.factureForm.get('divisions').value;
    // Fetch related SousTraitants and other data based on the selected business
    console.log(selectedPole)
    this.businesses = selectedPole.businesses
    // You can also load other related data here
  }


  onSubmit(f): void {

    let obj = {
      business:this.factureForm.get('business').value.businessID,
      sousTraitant:this.factureForm.get('sousTraitant').value?.id,
      projectManager:this.projectManagerID
    }
    Object.assign(obj, f.value);
        console.log(obj)

    this.service.createsFacture(obj).subscribe((response) => {
      // Handle the response
    });
  }
}
