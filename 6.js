/*

CALCULATE NUMBER
================

Calculate number adalah sebuah fungsi untuk melakukan operasi matematika.
Fungsi akan menerima input berupa persamaan matematika dan mengembalikan nilai
berupa hasil kalkulasi.

RULES:
  - fungsi hanya menghandle operasi tambah dan kurang saja
  - fungsi dapat menerima angka satuan, puluhan, dan ratusan

EXAMPLE:
  console.log(calculateNumber("2+3+4+5-4-3-2"))
  OUTPUT: 5

*/

function calculateNumber(strNum) {
  // code below here
  var array = [];
  var tampung = '';
  //Memisahkan operator
  for(var i=0;i<strNum.length;i++){
    if(i === strNum.length-1){
      tampung += strNum[i];
      array.push(tampung);
    }
    else if(strNum[i] === '+'){
      array.push(tampung);
      array.push(strNum[i]);
      tampung = '';
    }else if(strNum[i] === '-'){
      array.push(tampung);
      array.push(strNum[i]);
      tampung = '';
    }else{
      tampung += strNum[i];
    }
  }

  //Perhitungannya
  var hasil = 0;
  for(var j=array.length-1;j>=0;j--){
    if(array[j] === '+'){
      hasil = hasil + parseInt(array[j+1]);
    }else if(array[j] === '-'){
      hasil = hasil - parseInt(array[j+1]);
    }else if(j===0){
      return hasil + parseInt(array[j]);
    }
  }
};

console.log(calculateNumber("1+10+100")) // 111
console.log(calculateNumber("100")) // 100
console.log(calculateNumber("200-200+100")) // 100