/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  // code below here
  var result = [];

  function balik(angka1){
    var hasil = 0;
    var i = 1;
    while(angka1>0){
      hasil = hasil * 10 + (angka1 % 10);
      angka1 = (angka1/10) | 0;
      i *= 10;
    }
    return hasil;
  }
  function Palindrome(angka2){
    if(angka2 === balik(angka2)){
      return angka2;
    }else{
      return Palindrome(angka2+1);
    }
  }

  for(var i=0;i<numbers.length;i++){
    if(numbers[i] === balik(numbers[i])){
      result[result.length] = numbers[i];
    }else{
      result[result.length] = Palindrome(numbers[i]);
    }
  }
  return result;
};

console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]
