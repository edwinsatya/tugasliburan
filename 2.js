/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 6.3 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function winner (cars, totalKM) {
  //code below here
  var tampung = [];
  var hasil = [];
  
  for(var i=0; i<cars.length; i++){
    cars[i].unshift((totalKM - cars[i][2]) / cars[i][1]);
  }
  for(var j=0; j<cars.length; j++){
      if(cars[j][0] < tampung){
        hasil.unshift(cars[j][1]);
        tampung.splice(0,1, cars[j][0]);
      } else {
        hasil.splice(cars.length-j-1, 0, cars[j][1]);
        tampung.splice(0,1, cars[j][0]);
      }   
  }
  return hasil;
};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
//2,5 2,25 , 2,3 , 0,625
/*
1172,1171,1173
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/