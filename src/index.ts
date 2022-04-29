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
  }}
}

btnProcesarArreglos.addEventListener("click", () => {
  arrayLength = Number(tamanioArreglos.value);
  if (arrayLength >= 10 || arrayLength <= 0) {
    alert("el tamaño de los arreglos debe ser mayor que 0 y menor que 10");
  }
  else {
    assignValues(array1, 1);
    assignValues(array2, 2);
    assignValues(array3, 3);
    console.log(
      `valores del arreglo uno: ${array1}, del arreglo dos: ${array2}, y del arreglo tres: ${array3}`
    );
    let contador = 0;
    for (contador = 0; contador <= arrayLength - 1; contador++) {
      positionValue = Number(
        array1[contador] + array2[contador] + array3[contador]
      );
      array4.push(positionValue);
    }
    console.log(`los valores del arreglo cuatro son: ${array4}`);
    array1 = new Array(arrayLength);
    array2 = new Array(arrayLength);
    array3 = new Array(arrayLength);
    array4 = new Array(arrayLength);
  }
});
