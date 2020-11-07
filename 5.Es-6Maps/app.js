//Maplar her keye karşılık gelen bir anahtar bulunuyor Key(Anahtar)- Value(Değer)
//obje oluştururken obje özelliği int olamaıyo ama bunda oluyor
//Maplar - Key(Anahtar) - Value(Değer)

let myMap=new Map();//oluşturulur bu şekilde

// console.log(typeof myMap);

const key1="Ahmet";
const key2={a:10,b:20};
const key3= ()=>2;
//set
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");
//get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

//Map boyutu

// console.log(myMap.size);
const cities=new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

//For Each

cities.forEach(function(value,key){//value ankara istanbul.. eşit olavak value ise 5, 15 vb..
    console.log(key,value);
});

//For Of

for(let value of cities){//böyle alırsak
    console.log(value); //(2) ["Ankara",5] şeklinde gelir böyle olmaması için
}

for(let [key,value] of cities){
    console.log(key,value); 
}

//sadece keyleri almak istersem keys
for(let key of cities.keys()){
console.log(key);
}

//Map values

for(let valuesv of cities.values()){
    console.log(valuesv);
}

//maplerden array oluşturma

const array=Array.from(cities);
console.log(array);




