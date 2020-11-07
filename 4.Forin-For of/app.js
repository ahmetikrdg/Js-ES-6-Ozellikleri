const person={
    name:"Ahmet",
    age:25,
    salary:3000
};

const langs=["Phyton","Java","C++","Php"];
const name="Mustafa";

/*
//For In - Object
for(let prop in person){
  console.log(prop,person[prop]);
}
//array
for(let index in langs){
    console.log(index,langs[index]);
}

//string
for(let index in name){
    console.log(index);
}*/

// For Of obje üzerinde gezinilmez

// for(let value of person){//error geldi bu obje üzerinde gezinemsin diye
//     console.log(value);
// }

for(let value of langs){
    console.log(value);
}

for(let character of name){
    console.log(character);
}


const tut=[10,20,30,40,50];

for(let tutulan in tut){
    console.log(tutulan,tut[tutulan]+1);
}