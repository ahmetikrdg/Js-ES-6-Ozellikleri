//bir değeri sadece bir defa taşır

const mySet= new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Mustafa");

const mySet2=new Set([100,3.14,"Mustafa"]); //bu şekildede eklenebilir

console.log(mySet)
console.log(mySet2);
console.log(mySet.size);//kaç eleman var

//Delete

mySet.delete("Mustafa");
console.log(mySet)

//Has Metodu: Değer verip o değer bu kümede varmı sorgularız

console.log(mySet.has("Mustafa"));//false dedi çünkü mustafayı silmiştik

//Fore Each

mySet.forEach(function(value){
 console.log(value);
});

//For Of

for(let valuex of mySet){
    console.log(valuex);
}

//Setlerden array oluşturma yukarıda mysetler var onlardan bir rray oluşturcaz

const array=Array.from(mySet);
console.log(array);