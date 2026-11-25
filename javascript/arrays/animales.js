document.write(`creacion de objeto ANIMAL <br>`);

var animal = {
   nombre: `leopardo`,
   Tamaño: `91 cm y 1,91 m de largo`,
   peso: `37 y 90 kg`,
   sonido: `Produce rugidos profundos y asperos`,
   velocida: `58 y 60 km/h`,
}

//acceso a las propiedades

document.write(`nombre: ${animal.nombre}`, `<br>`);
document.write(`<br>`);
document.write(`clase de animal carnivoro`, `<br>`);

class Animal { 
   //Atributos
   nombre = `lince`;
   Tamaño = `60 y 130 cm`;
   peso = `8 y 30 kg`;
   sonido = `Se comunica con maullidos fuertes y alaridos agudos`;
   velocida = `65 y 80 km/h`;

   //Metodos
   //Representan acciones o comportamientos

   correr(){
      return `El ${this.nombre} puede alcanzar una velocidad de ${this.velocida}`;
   }

   comunicarse(){
      return `El ${this.nombre} ${this.sonido}`;
   }
}

//crear un objeto basado en la clase Animal

const lince = new Animal();

//mostrar las propiedades y metodos del objeto lince

document.write(`nombre: ${lince.nombre} <br>`);
document.write(`Tamaño: ${lince.Tamaño} <br>`);
document.write(`peso: ${lince.peso} <br>`);
document.write(`sonido: ${lince.sonido} <br>`);
document.write(`velocidad: ${lince.velocida} <br>`);
document.write(`<br>`);

document.write(lince.correr() + `<br>`);
document.write(lince.comunicarse() + `<br>`);

document.writeln(`<br>================================`);

/* Herencia Subclases y Metodos */

class Deportistas {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        
    }
}

class Futbolista extends Deportistas {
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this.goles = goles;
    }

    get goles(){
        return this._goles;
    }
    set goles(newGoals){
        this._goles = newGoals;
    }
}

let futbolista2 = new Futbolista(`Lionel`, `Messi`, 937);

document.writeln(`<br>`);
document.writeln(`Nombre: ${futbolista2.nombre}<br>`);
document.writeln(`Apellido: ${futbolista2.apellido}<br>`);
document.writeln(`Goles anotados: ${futbolista2.goles}<br>`);