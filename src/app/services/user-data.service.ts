import { Injectable } from '@angular/core';
import { Users } from '../datas/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

    private data: Users[] = [];

    getData(): Users[] {
        return JSON.parse(localStorage['user']);
    }

    addData(name: string, age: string){
        this.data.push(new Users(name, age));
        localStorage['user'] = JSON.stringify(this.data);
    }

    removeData(){
        localStorage.clear();
    }

    constructor() { }
}
