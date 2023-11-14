import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { fadeInOut, INavbarData } from './helper';
// const imagePathBase = '../..';
const imagePathBase = '/dashbord';

interface Habilitation {
  id_hab: number;
  name: string;
  components: any[]; // replace 'any' with the appropriate type
}

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    fadeInOut,
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData:any;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router,private service:ServiceService) {
    // this.navData = navbarData;
  }

  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
      console.log('sidnave')
      var components = []

      // console.log(JSON.parse(<string>localStorage.getItem('user')).profil.habilitations)

      // for(let ele of JSON.parse(<string>localStorage.getItem('user')).profil.habilitations){
      
      //   for(let cc of ele.components){
      //     components.push(cc)
      //   }
      // }
      // this.service.setHabilitations(components);

      
      // console.error(this.service.getHabilitations())


      // if (JSON.parse(<string>localStorage.getItem('user')).roles[0].name == 'Role_Admin'){
        this.navData = [
          {
            routeLink: 'administration',
            icon: `${imagePathBase}/assets/profil.png`,
            label: 'Administration'
            ,items:[
              {
                routeLink: 'typography',
                label: 'les utilisateurs'
            }, 
            
          {
              routeLink: 'tuyaux',
              icon: `${imagePathBase}/assets/pipes.png`,
              label: 'Ajouter Facture',
          },
          {
            routeLink: 'pomp',
            icon: `${imagePathBase}/assets/pump.png`,
            label: 'Suivi Facture',
        }, 
        
            //   {
            //     routeLink: 'profile',
            //     label: 'profils'
            // }, 
            //   {
            //     routeLink: 'notitifications',
            //     label: 'notitifications'
            // }, 
            //   {
            //     routeLink: 'mail',
            //     label: 'mail'
            // }, 
            //   {
            //     routeLink: 'actions',
            //     label: 'Actions'
            // }, 
          
          ]
        },
            // {
            //     routeLink: 'typography',
            //     icon: `${imagePathBase}/assets/users.png`,
            //     label: 'les utilisateurs' 
            // },
            
            // {
            //     routeLink: 'profile',
            //     icon: `${imagePathBase}/assets/profil.png`,
            //     label: 'profils' 
            // },
            {
                routeLink: 'dashboard',
                icon: `${imagePathBase}/assets/loger.png`,
                label: 'Dashboard' 
            },
            {
              routeLink: 'notification',
              icon: `${imagePathBase}/assets/notification.png`,
              label: 'Affaires' 
          },
            {
              routeLink: 'AddSoutraitant',
              icon: `${imagePathBase}/assets/notification.png`,
              label: 'Sous-traitances' 
          },
            
            {
                routeLink: 'suivieFacture',
                icon: `${imagePathBase}/assets/car.png`,
                label: 'suivieFacture',
            }, 
            
            {
                routeLink: 'pElectric',
                icon: `${imagePathBase}/assets/electric-pole.png`,
                label: 'Poste Electrique',
            },
            {
              routeLink: 'terrassement',
              icon: `${imagePathBase}/assets/excavation.png`,
              label: 'Terrassement',
          }, 
            {
              routeLink: 'album',
              icon: `${imagePathBase}/assets/picture.png`,
              label: 'Gallery',
          }, 
            {
                routeLink: 'statistics',
                icon: `${imagePathBase}/assets/carte.png`,
                label: 'Carte'
            },
            {
                routeLink: 'AvancementTraver',
                icon: `${imagePathBase}/assets/road-roller.png`,
                label: 'Avancement  des traversées'
            },
            {
                routeLink: 'AvancementFinancierComponent',
                icon: `${imagePathBase}/assets/finance.png`,
                label: 'Avancement  financier'
            },
            {
                routeLink: 'validation1',
                icon: `${imagePathBase}/assets/member-v1-64.png`,
                label: 'validation1'
            },
            {
                routeLink: 'validation2',
                icon: `${imagePathBase}/assets/food-club-member-v2-64.png`,
                label: 'validation2'
            },
            {
                routeLink: 'mise a jour',
                icon: `${imagePathBase}/assets/update.png`,
                label: 'mise à jour',
                items:[
                  {
                    routeLink: 'insert',
                    label: 'Tuyaux'
                },
                  {
                    routeLink: 'insert_force',
                    label: 'Tuyaux force'
                },
                  {
                    routeLink: 'insertElectrique',
                    label: 'Electrique'
                },
                  {
                    routeLink: 'insertPomp',
                    label: 'Pomp'
                },
                  {
                    routeLink: 'insertMoteur',
                    label: 'insert Moteur'
                },
                  {
                    routeLink: 'insertTerrassement',
                    label: 'Terrassement'
                },
                  {
                    routeLink: 'insertTraver',
                    label: 'traversées'
                },
                  {
                    routeLink: 'insertFinancement',
                    label: 'Avancement Financier'
                },
                  {
                    routeLink: 'divers',
                    label: 'divers'
                },
                ]
            }
        ];
        // }
        
        // else{
         
        //   this.navData = [];
      
        // this.navData.push({
        //   routeLink: 'notification',
        //   icon: `${imagePathBase}/assets/notification.png`,
        //   label: 'Notification' 
        // })
        // const habilitations: Habilitation[] = JSON.parse(<string>localStorage.getItem('user')).profil.habilitations;
        // const order = ['dashboard' ,'tuyaux', 'moteur', 'pomp', 'pElectric', 'terrassement', 'album', 'statistics', 'AvancementTraver', 'AvancementFinancierComponent', 'validation1', 'validation2','insert'];
        // habilitations.sort((a, b) => {
        //   const indexA = order.indexOf(a.name);
        //   const indexB = order.indexOf(b.name);
        //   return indexA - indexB;
        // });
        // console.error(habilitations)
        //   for(let ele of  habilitations){
        //     switch (ele.name){
        //       case 'dashboard':
        //         this.navData.push({
        //           routeLink: 'dashboard',
        //           icon: `${imagePathBase}/assets/loger.png`,
        //           label: 'Dashboard' 
        //       })
        //         break;

        //         case 'tuyaux':
        //           this.navData.push(
        //             {
        //               routeLink: 'tuyaux',
        //               icon: `${imagePathBase}/assets/pipes.png`,
        //               label: 'Tuyaux',
        //           }
        //         )
        //           break;
        //         case 'moteur':
        //           this.navData.push(
        //             {
        //               routeLink: 'moteur',
        //               icon: `${imagePathBase}/assets/car.png`,
        //               label: 'Moteur',
        //           }
        //         )
        //           break;
        //         case 'pomp':
        //           this.navData.push(
        //             {
        //               routeLink: 'pomp',
        //               icon: `${imagePathBase}/assets/pump.png`,
        //               label: 'Pomp',
        //           }
        //         )
        //           break;
        //         case 'pElectric':
        //           this.navData.push(
        //             {
        //               routeLink: 'pElectric',
        //               icon: `${imagePathBase}/assets/electric-pole.png`,
        //               label: 'Poste Electrique',
        //           }
        //         )
        //           break;
        //           case 'terrassement':
        //             this.navData.push( {
        //             routeLink: 'terrassement',
        //             icon: `${imagePathBase}/assets/excavation.png`,
        //             label: 'Terrassement',
        //         })
        //         break;

        //           case 'album':
        //             this.navData.push(
        //           {
        //                   routeLink: 'album',
        //                   icon: `${imagePathBase}/assets/picture.png`,
        //                   label: 'Gallery',
        //               }
        //             )
        //             break;

        //         case 'statistics':
        //           this.navData.push(
        //             {
        //               routeLink: 'statistics',
        //               icon: `${imagePathBase}/assets/carte.png`,
        //               label: 'Carte'
        //           }
        //         )
        //           break;
        //         case 'AvancementTraver':
        //           this.navData.push(
        //             {
        //               routeLink: 'AvancementTraver',
        //               icon: `${imagePathBase}/assets/road-roller.png`,
        //               label: 'Avancement  des traversées'
        //           }
        //         )
        //           break;
        //         case 'AvancementFinancierComponent':
        //           this.navData.push(
        //             {
        //               routeLink: 'AvancementFinancierComponent',
        //               icon: `${imagePathBase}/assets/finance.png`,
        //               label: 'Avancement  financier'
        //           }
        //         )
        //           break;
        //           case 'validation1':
        //             this.navData.push(
        //            {
        //         routeLink: 'validation1',
        //         icon: `${imagePathBase}/assets/member-v1-64.png`,
        //         label: 'validation1'
        //            }
        //             )
        //         break;
        //           case 'validation2':
        //             this.navData.push(
        //            {
        //               routeLink: 'validation2',
        //         icon: `${imagePathBase}/assets/food-club-member-v2-64.png`,
        //         label: 'validation2'
        //            }
        //             )
        //         break;

        //         case 'insert':
        //           this.navData.push(
                 
        //               {
        //         routeLink: 'mise a jour',
        //         icon: `${imagePathBase}/assets/update.png`,
        //         label: 'mise a jour',
        //         items:[
        //           {
        //             routeLink: 'insert',
        //             label: 'Tuyaux'
        //         },
        //         //   {
        //         //     routeLink: 'insert_force',
        //         //     label: 'Tuyaux force'
        //         // },
        //           {
        //             routeLink: 'insertElectrique',
        //             label: 'Electrique'
        //         },
        //           {
        //             routeLink: 'insertPomp',
        //             label: 'Pomp'
        //         },
        //         {
        //           routeLink: 'insertMoteur',
        //           label: 'insert Moteur'
        //       },
        //           {
        //             routeLink: 'insertTerrassement',
        //             label: 'Terrassement'
        //         },
        //           {
        //             routeLink: 'insertTraver',
        //             label: 'traversées'
        //         },
        //           {
        //             routeLink: 'insertFinancement',
        //             label: 'Avancement Financier'
        //         },
        //         {
        //           routeLink: 'divers',
        //           label: 'divers'
        //       },
        //         ]
        //     })
        //     break;

        //           default:
        //             console.log("hello")

        //     }
        //   }
          
        // }

  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: INavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: INavbarData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
