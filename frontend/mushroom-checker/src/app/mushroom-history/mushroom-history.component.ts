import { Component, OnInit, Input } from '@angular/core';
import { Mushroom, MushroomService, _Mushroom } from '@skraus/mushroom-api-client';


const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-mushroom-history',
  templateUrl: './mushroom-history.component.html',
  styleUrls: ['./mushroom-history.component.css']
})
export class MushroomHistoryComponent implements OnInit {

  constructor(private mushroomService: MushroomService) {
    
   }

  ngOnInit() {
    this.getHistory()
    this.mushrooms[0]
    
  
    
  }
  
 
  getEnumMember(propertyName: string, value) {

    
   //Converting property Name to Enum Name
    var enumName = propertyName.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
    enumName = enumName.charAt(0).toUpperCase() + enumName.slice(1) + "Enum"
    console.log("enum Name = " +enumName)
    for(let key of Object.keys(_Mushroom[enumName])){
     
      if(_Mushroom[enumName][key] == value){

        console.log("Found Key" +key )
        return key;
      }
    }
    
    // Object.keys(_Mushroom['BruisesEnum'])[0]
  }

  getHistory() {
    this.isLoading = true
       
    this.mushroomService.getHistory().subscribe(mushrooms => {
      this.mushrooms = mushrooms
      this.isLoading = false
      this.displayedColumns = Object.keys(this.mushrooms[0])
      })
  }
  test: string = this.getEnumMember('bruises',"f")
  mushrooms: Mushroom[]
  isLoading: boolean
  displayedColumns: string[] 
  

}
