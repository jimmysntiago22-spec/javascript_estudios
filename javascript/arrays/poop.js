/* (poop) programacion orientada a objetos

la poop es un paradigma de programacion que organiza els software en clases y objebtos para modelar concetos del mundo real. este enfoque promueve la reutilizacion del codigo 
*/ 
document.write(`cracion de objeto AUOMOVIL <br>`);

var Auto = {
   marca: `Toyota`,
   modelo: `Corolla`,
   color: `azul`,
   año: `2026`,
   combustible: `Dieesel`,
   tipo: `Sedan`,
   radio: `["fm", "mp4","usb"]`
}

//acceso a las propiedades

document.write(`marca: ${Auto.marca}`, `<br>`)
document.write(`<br>`)
document.write(`clase vehiculo con objeto ferrari`, `<br>`)

class vehiculo { 
   //Atributos
   marca= `Toyota`;
   modelo= `Corolla`;
   color= `azul`;
   año= `2026`;
   combustible= `Dieesel`;
   tipo= `Sedan`;
   precio = `76.285.000`;
   
   //metodos
   //representan accciones o comportamientos
   acelerar(){
      return `El ${this.marca} acelera de 0 a 100 km/h en tan solo 3 segundos`
   }
      frenar(){
      return `El ${this.marca} ${this.modelo} puede frenar de 100 a 0 km/h en tansolo 2.5 segundos.`
   }
}


//crear un objeto basadoen la clave vehiculos
const ferrari = new vehiculo();
// se devclara una constante luego la palabra reservada new que significa que esta creado una nueva instancia de tip objeto y al colocar el nombre de la clase, de este nuevo objecto tendra a disposcion los atributos y metodos de la clase previamente creada

//mostrar las proppiedades y metodos  del objeto ferari
document.write(`marca: ${ferrari.marca} <br>`);
document.write(`modelo: ${ferrari.modelo} <br>`);
document.write(`color: ${ferrari.color} <br>`);