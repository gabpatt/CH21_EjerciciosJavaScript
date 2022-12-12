//ejercicio 1

let numero = ["3", "5", "7", "1", "6"]

maximo=0;
console.log(numero.length);
for(let i=0,len=numero.length; i<len;i++){
    if(maximo < numero[i]){
    maximo = numero [i];
    }
}
document.write (maximo);


//ejercicio 2


let maria = ["-1", "3", "4", "2", "6"]
minimo=0;
console.log(maria.length);
for(let i=0,len=maria .length;i<len;i++){
    if(minimo > maria [i]){
    minimo = maria [i];
    }
}
document.write (minimo);


//ejercicio 3

let caso1= ["1", "22", "5", "17"," 10", "5", "40", "5"].sort(function(a,b){return a-b});
console.log(caso1)

for(let i=0; i<caso1.length; i++){
    if(caso1[i+ 1] === caso1[i]){
        console.log("Se repite el número " + caso1[i]);
    }
}

let caso2= ["7", "41", "5", "7","10", "5", "13", "2"].sort(function(a,b){return a-b});
console.log(caso2)

for(let i=0; i<caso2.length; i++){
    if(caso2[i+ 1] === caso2[i]){
        console.log("Se repite el número " + caso2[i]);
    }
}

let caso3= ["1", "22", "5", "14","24", "31", "27", "15", "105"].sort(function(a,b){return a-b});
console.log(caso3)

for(let i=0; i<caso3.length; i++){
    if(caso3[i+ 1] !== caso3[i]){
        console.log("No se repiten números " );
    }
}



//ejercicio 4

function shuffle(array){
    array.sort(()=> Math.random()- 0.5);
}
let desorden= ["1", "2", "5", "14", "24", "31", "50", "105"]
shuffle(desorden);
console.log(desorden);



//segunda parte

//ejercicio 1
let opcion1 = document.getElementById("opc1");
    let opcion2 = document.getElementById("opc2");
    let opcion3 = document.getElementById("opc3");
    let resultado = document.getElementById("Resultado");
    let btn = document.getElementById("btnMayor");
    
function NumMayor(numero1, numero2, numero3){
    return (resultado.textContent = Math.max(numero1, numero2, numero3));
};

btn.addEventListener("click", function(e){
    e.preventDefault(); 
    NumMayor(opcion1.value, opcion2.value, opcion3.value)
    
})


//ejercicio 2
let number1= document.getElementById("menor1")
let number2= document.getElementById("menor2")
let number3= document.getElementById("menor3")
let answer= document.getElementById("answer")
let btnMenor= document.getElementById("btnMenor")

function NumMin(numero1, numero2, numero3){
    return (answer.textContent = Math.min(numero1, numero2, numero3))
}
btnMenor.addEventListener("click", function(e){
    e.preventDefault();
    NumMin(number1.value, number2.value, number3.value)
})


//ejercicio 3

function intento(numeroCorrecto){
    let numMaquina = Math.random();
    numMaquina= numMaquina*100;
    numMaquina= Math.floor(numMaquina);
    if (numMaquina == numeroCorrecto){
        return true;
    }
    else{
        return false;
    }
}
document.getElementById("adivinaBoton").onclick =function(){
    let miNumero= document.getElementById("numero").value;
    let aciertoMaquina= false;
    let numeroIntentos = 1;

    while (aciertoMaquina == false){
        if (intento (miNumero) == true){
            aciertoMaquina =true;
            alert("Lo logré, el número era " + miNumero + " lo hice en " + numeroIntentos + " intentos.");
        }
        else{
            numeroIntentos = numeroIntentos+1
        }
    }
}

//ejercicio 4
let ejercicio4 = document.getElementById("multiplo")
let bnt4 = document.getElementById("btnMulti")
let multi3 = document.getElementById("multi3")

function multiplo3(numero){
    return (multi3.textContent = (numero % 3 ===0));
}
btnMulti.addEventListener("click", function(e){
    e.preventDefault();
    multiplo3(ejercicio4.value)
})

//ejercicio 5
/*
let Su1 = document.getElementById("S1")
let Su2 = document.getElementById("S2")
let Su3 = document.getElementById("S3")
let btn0 = document.getElementById("btn6")
let lert = document.getElementById("Suma")

function sumaDe3(a,b,c){
    if (a == b + c){
        return true;
    }
    else if (b == a+c){
        return true;
    }
    else if (c == a+b){
        return true;
    }
    else{
        return false
    }
}
Suma.addEventListener("click", function(e){
    e.preventDefault();
    sumaDe3(Su1.value, Su2.value, Su3.value)
})
*/

//ejercicio 6
let ejercicio6 = document.getElementById("parImpar")
let btn6= document.getElementById("btnParImpar")
let resultado6 = document.getElementById("imparPar")
function isEven(num){
    return (resultado6.textContent = (num % 2 == 0? 'Even number':'Odd number')) ;
}

btnParImpar.addEventListener("click", function(e){
    e.preventDefault();
    isEven(ejercicio6.value)
})