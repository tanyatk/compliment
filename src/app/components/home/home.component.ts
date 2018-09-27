import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { Users } from '../../datas/users.model';
import { Location } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserDataService ]
})

export class HomeComponent implements OnInit {

    userDataControl: FormGroup;
    items: Users[] = [];

     constructor(
         private userDataService: UserDataService,
         private location: Location,
         private route: ActivatedRoute,
         private router: Router
     ){}

     ngOnInit() {
        this.userDataControl = new FormGroup({
          name: new FormControl(),
          age: new FormControl('', [], [ageAsyncValidator])
        });

      }

      addItem(name: string, age: string): void {
          this.userDataService.addData(this.userDataControl.value.name, this.userDataControl.value.age);
          this.router.navigate(['greeting']);
      }

}

function ageAsyncValidator(control: AbstractControl): Observable<{ [key?: string]: boolean } | null> {
    let ageRangeErr;
    if (control.value !== undefined && (isNaN(control.value) || control.value < 1 || control.value > 100)) {
        return of({ 'ageRangeErr': true });
    }
    return of(null);
}
