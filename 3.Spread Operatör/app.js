//spread operatör
const langs=["phyton","C++","Java","php"];
//console.log(langs[0],langs[1],langs[2],langs[3]);
//console.log(...langs);//bu gösterim idrek olarak ayrı ayrı 4 kelime göndermişiz gibi algılar.Yukarıdakine gerek kalmaz

// const langs2=["Javascript","C#",langs[0],langs[1],langs[2],langs[3]];
//const langs2=["Javascript","C#",...langs];//yukarıdaki yerine bu daha kısa direk içine atadı

/*
const numbers=[1,2,3,4,5,6,7,8,9];
const [a,b,...numbers2]=numbers;

console.log(a,b);
console.log(numbers2);*/


const addNumbers=(a,b,c)=> console.log(a+b+c);

const numbers=[100,200,300];
addNumbers(...numbers);


const carpma=(c)=>console.log(c*c*c);

carpma(3);
