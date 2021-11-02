import { Inject, Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { UserInfoComponent } from "../User-Info/user-info.component";
import { WatchListCardInfo } from "./add-watchlist-card/watchlist-card-info.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService{
    items: Observable<WatchListCardInfo []>;

    constructor(private db: AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<WatchListCardInfo>('').valueChanges();
    }  

    public showData(){
        this.items.subscribe((data: WatchListCardInfo[]) =>{
            console.log("data received");
            console.log(data);
            for(let item of data){
                console.log(item);
            }
        })
    }
}