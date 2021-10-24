//var global değişken o yüzden let kullan. const sabittir.
console.log('Merhaba kodlama.io');

let dolarDun = 9.20;
let dolarBugun = 9.30;

console.log(dolarDun);

const euro = 11.2;
//euro = 11 bu hata çünkü const sabittir farklı bir değer ile değiştiremezsin

console.log(euro);

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>");

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>");
    
}

console.log("</ul>");



console.log(konutKredileri);