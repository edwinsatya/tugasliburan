/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here
  var total =0;
  var hasil = [];
  var tampung = [];

  loop1:
  for(var i=0;i<cars.length;i++){
    for(var k=0;k<tampung.length;k++){
      if(cars[i] === cars[k]){
        continue loop1;
      }
    }
    for(var j=i;j<cars.length;j++){
      if(cars[i] === cars[j]){
        total++;
      }
    }
    tampung[tampung.length] = cars[i];
    hasil[hasil.length] = cars[i];
    hasil[hasil.length] = total/cars.length*100;
    total = 0;
  }
  return hasil;
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/