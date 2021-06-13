import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatherandson',
  templateUrl: './fatherandson.component.html',
  styleUrls: ['./fatherandson.component.scss']
})
export class FatherandsonComponent implements OnInit {

  dataList3: Array<{ key }> = [{key:" 4"},{key:"  4"},{key:"   4"},{key:"    4"},{key:" 4"}];
  dataList: Array<{ key: number, value: number }> = [];
  dataList2: Array<{}> = Array(17).fill(0);
  atLeast = false;
  countGlobal = 0;
  constructor() {
    this.dataList.push({ key: 2, value: 8 });
    this.dataList.push({ key: 3, value: 4 });
    this.dataList.push({ key: 4, value: 0 });
    this.dataList.push({ key: 5, value: 9 });
    this.dataList.push({ key: 6, value: 0 });
    this.dataList.push({ key: 7, value: 3 });
    this.dataList.push({ key: 8, value: 0 });
    this.dataList.push({ key: 9, value: 2 });
    this.dataList.push({ key: 10, value: 2 });
    this.dataList.push({ key: 11, value: 15 });
    this.dataList.push({ key: 11, value: 2 });
    this.dataList.push({ key: 12, value: 9 });
    this.dataList.push({ key: 13, value: 2 });
    this.dataList.push({ key: 14, value: 10 });
    this.dataList.push({ key: 15, value: 12 });
    this.dataList.push({ key: 16, value: 6 });
    this.dataList.push({ key: 17, value: 0 });
    this.dataList.push({ key: 1, value: 0 });
  }

  ngOnInit(): void {
    this.dataList.sort(function (a, b) {
      return a.value - b.value;
    });


    var countData = {};
    this.dataList.forEach(function (x) { if (x.value == 0) { countData[x.value] = (countData[x.value] || 0) + 1; } });
    let space = (this.dataList.length / countData[0]);
    space = Math.ceil(space);

    for (let index = 0; index < countData[0]; index++) {
      if (index == 0) {
        this.dataList2.splice(0, 0, { val: this.dataList[index].key, style: "", position: "margin-left: 80px;" });
      } else if (countData[0] - 1 == index) {
        this.dataList2[this.dataList.length - 1] = { val: this.dataList[index].key, style: "" };
      } else {
        this.dataList2[space * index] = { val: this.dataList[index].key, style: "" };
      }
    }

    this.dataList.forEach(element => {
      let count = 0;
      if (element.value != 0) {
        
        for (let index = 0; index < this.dataList2.length; index++) {
          if (this.dataList2[index] == 0) {   
            console.log("no es un cero")         
            this.dataList2[index] = { val: element.key, style: "sin bola" };
            break;
          }
        }
      } else {
        console.log("es un cero")
      }
    });  
    
    let count = 0;


    this.dataList2.forEach(e=>{        
        if (e["style"]==""){
          count = 0;          
        }else {
          count = count+1;
          e["val"] = this.fillSpace(e["val"],count);
        }
    })

  }

  putData(value, style) {
    this.dataList2.push({ val: value, style: style });
  }

  fillSpace (val,count){
    var space = "";
    for (let index = 0; index < count; index++) {
      
      space = space+ "-";

    }

    val = space+ val;

    return val;

  }





  analizeData(value) {

    if (value == 0) {
      this.atLeast = true;
    }
    if (this.atLeast == true) {
      console.log(value)
    }

  }

  getData(){
    this.dataList2.forEach(element => {
      console.log(element["val"])
    });
  }

}
