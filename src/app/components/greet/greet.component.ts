import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Users } from '../../datas/users.model';
import { Location } from '@angular/common';

@Component({
    selector: 'app-greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.css'],
    providers: [ UserDataService ]
})
export class GreetComponent implements OnInit {

    items: Users[] = [];

     constructor(
         private userDataService: UserDataService,
         private location: Location
     ){}

     ngOnInit(){
         this.items = this.userDataService.getData();
         console.log(this.items);
     }

     dataClear(): void{
         this.userDataService.removeData();
         this.location.back();
     }

}
