let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];
let juftlar = [];
let toqlar = [];

for (let i = 0; i < 8; i++) {
  if (sonlar[i] % 2 === 0) {
    juftlar.push(sonlar[i]);
  } else {
    toqlar.push(sonlar[i]);
  }
}

console.log(juftlar);
console.log(toqlar);

