//Referans veri tipleri bellekte belli bi yeri tutan değerlerimiz
//primitive ise sadece o değeri taşıyan veri tipimizdi

//primitive bakalım
/*
let a ="Ahmet";
let b ="Ahmet";
if(a===b)//bu kıyaslama içindeki veri tiplerini kontrol eder referans tiplerde ise olay böyle değildir
{
    console.log("Eşit");
}

let array1=[1,2,3,4,5];
let array2=[1,2,3,4,5];
if(array1===array2)//referansta bellekte referans kodları var o yüzden eşleşmez stack heap kavramını hatırla
{
    console.log("Eşit");
}

const person1={
    name:"Mustafa",
    afe:25
};

const person2={
    name:"Mustafa",
    age:25
};
if(person1===person2)//yine objenin adresine baktığım için eşleşmez hiçbirşekildede eşleştiremezsin JS'de böyle bir fonksiyonda yok
{
    console.log("Eşit");
}*/

/*
const cities=new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);

console.log(cities.get("Ankara"));*/

arr1=[1,2,3,4,5];
arr2=[1,2,3,4,5];

for(i=0;i<arr1.length;i++){
  if(arr1[i]===arr2[i]){
   console.log("Eşit")
  }
}

