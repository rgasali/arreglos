//Declaracion de variables

let tamanioArreglos = <HTMLInputElement>(
  document.getElementById("tamanioArreglos")
);
let btnProcesarArreglos = <HTMLButtonElement>(
  document.getElementById("btnProcesarArreglos")
);

let arrayLength: number;
let positionValue: number;
let array1: number[] = new Array();
let array2: number[] = new Array();
let array3: number[] = new Array();
let array4: number[] = new Array();

//declaracion de funciones
function assignValues(arreglo: number[], numero: number) {
  let contador = 0;
  for (contador = 0; contador <= arrayLength - 1; contador++) {
    positionValue = Number(
      prompt(
        `ingrese el valor para la posicion ${contador} del arreglo numero ${numero}`
      )
    );
    arreglo.push(positionValue);
  }
}

btnProcesarArreglos.addEventListener("click", () => {
  arrayLength = Number(tamanioArreglos.value);
  if (arrayLength >= 10 || arrayLength <= 0) {
    alert("el tamaño de los arreglos debe ser mayor que 0 y menor que 10");
  } else {
    console.log(
      "los valores de los arreglos 1, 2 y 3 son: " + array1,
      array2,
      array3
    );
    console.log("los valores del arreglo 4 son:" + array4);
    assignValues(array1, 1);
    assignValues(array2, 2);
    assignValues(array3, 3);
    let contador = 0;
    for (contador = 0; contador <= arrayLength - 1; contador++) {
      positionValue = Number(
        array1[contador] + array2[contador] + array3[contador]
      );
      array4.push(positionValue);
    }
    array1 = new Array(arrayLength);
    array2 = new Array(arrayLength);
    array3 = new Array(arrayLength);
    array4 = new Array(arrayLength);
  }
});
