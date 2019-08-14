import { Action } from "./ngrx-fake/ngrx";
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";


//Usar el reducer


console.log(contadorReducer(10,incrementadorAction));
console.log(contadorReducer(10,decrementadorAction));
console.log(contadorReducer(10,multiplicarAction));
console.log(contadorReducer(10,dividirAction));
console.log(contadorReducer(null,resetAction));