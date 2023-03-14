'use strict';
this.L = console.log;
this.D = console.dir;
this.table = "wolf's table";
/////////////////////////////////////////////////////////////////////////////////////////
let cleanTable = function (param1, param2) {
    L(this)
  const innerFunc =  ()=> {
    L(`cleaning ${this.table} with ${param1} while eating an ${param2}!`);
  };
 
  innerFunc();
};



this.garage = {
  table: 'garage table',
  // cleanTable() {
  //     L(`cleaning ${this.table}!`)
  // }
};

let jojosRoom = {
  table: "jojo's table",
  // cleanTable() {
  //     L(`cleaning ${this.table}!`)
  // }
};

// console.dir(this.table)
// console.dir(this.garage.table)
// console.dir(jojosRoom.table)
// this.garage.cleanTable()
// jojosRoom.cleanTable()
//garage.cleanTable.calL(this)
// this.cleanTable = garage.cleanTable;
// this.cleanTable()

// cleanTable.call(this, 'soap')
// cleanTable.call(this.garage, 'soap')

//cleanTable.call(jojosRoom, 'soap', 'apple')

// let creatRoomFunc = function (name, table, color) {
//   this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
// };

// class creatRoomFunc{
//     constructor(name, table, color){
//       this.name = name;
//   this.table = `${this.name}'s ${table}`;
//   this.color = color;
//   //this.clean = cleanTable    
//     }
// }
// creatRoomFunc.prototype.clean = cleanTable
// let kim = new creatRoomFunc('kim', 'round table', 'red');
// let mic = new creatRoomFunc('mic', 'squar table', 'blue');

// mic.clean('soap', 'banana')
// kim.clean('soap', 'apple')


// /////////////////////////////////////////////////////////////////////////////////////////
