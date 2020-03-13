/*
function sumar(a, b) {
    return a + b;
}
console.log(sumar(10, 20));
*/
/*
let sumar = (a, b) => {
    return a + b;
}
console.log(sumar(10, 20));
*/
/*
let sumar = (a, b) => a + b;
console.log(sumar(10, 20));
*/

/*
let saludar = () => 'hola mundo';
console.log(saludar());
*/

/*
let saludar = (nombre) => `hola ${nombre}`;
console.log(saludar(`Janluis`));
*/

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};
console.log(deadpool.getNombre());