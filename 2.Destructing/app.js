//Array ve obje içinden almak için kullandığımız kısa bir yol.

//let number1,number2;

//arr=[100,200,300,400];
/*
number1=arr[0];//100
number2=arr[1];//200 yazar
*/

//[number1,number2]=arr;//destructing yapımla yaptım
//şöylede kullanabiliriz destructingi

//const [number1,number2]=arr; 

//obje destructing
/*
const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
objenin içinden aldığım için süslü parantez kullanıyorum
const {a:number1,c,e}=numbers; //a,c,e yukarıdakilerle eşleşiyor. a'nın isminide a:number yazarak değiştirebilirsin.
console.log(number1,c,e);//ve yazdırılıyor */

/*
const getLangs=()=>["Pyhton","Java","C++"];

const [lang1,lang2,lang3]=getLangs();
console.log(lang1,lang2,lang3);
bu şekildede bu yapı kullanılabilir*/


const person={
    name:"Ahmet Karadağ",
    year:1999,
    salary:3000,
    showInfos:()=>console.log("Bilgiler Gösteriliyor...")
}

const {name:İsim,year:Yil,salary:Maas,showInfos:BilgileriGoster}=person;
console.log(İsim,Yil,Maas);
BilgileriGoster();

//bu yapıyı kullanabiliriz


