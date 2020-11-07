/*const merhaba =function(){
    console.log("Merhaba");
}

merhaba();*/

// Arrow Function 
/*
const merhaba=()=>{
    console.log("Merhaba");
}
merhaba();
*/


//const merhaba=firstname=>console.log("Merhaba",firstname);//tek paremetre alıyorsa  (firstname) gerek yok firstname yeter ve {}'de gerek yok
//merhaba("Ahmet");

//const merhaba=(firstname,lastname)=>console.log("Merhaba",firstname,lastname);//tek paremetre alıyorsa  (firstname) gerek yok firstname yeter ve {}'de gerek yok
//merhaba("Ahmet","Karadağ");

/*
const cube=function(x){
    return x*x*x;
}

console.log(cube(4));
*/
/*
const cube= x =>{return x*x*x};
console.log(cube(4)); //aynı sonucu aldık yukarıdakiyle
şimdi fonksiyon tek işlem yaptığı için returenede gerek yok. Bir parametre aldığı için () gerek yok bir işlem yaptığı için {} gerk yok.
*/
const cube= x =>x*x*x;
console.log(cube(4));


