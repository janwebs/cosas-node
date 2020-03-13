let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());

let { nombre: elnombre, apellido, poder } = deadpool

console.log(elnombre, apellido, poder);