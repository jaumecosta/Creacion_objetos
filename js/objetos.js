
var pelicula = {
    genero : 'Accion',
    titulo : 'John Wick',
    director : 'Daved Leitch y Chad Stahelski',
    guionista : 'Derek Kolstad',
    actor : 'Keany Reeves',
    año : 2014,
    detalles : function (){
        console.log(`Titulo ${this.titulo}, genero ${this.genero} , director ${this.director} , guionista ${this.guionista} , actor ${this.actor} , año ${this.año}`);
    }
};

pelicula.detalles();

var mobil = {
    modelo : 'Galaxy J7',
    marca : 'Samsung',
    software : 'Android',
    color : 'Negro',
    detalles : function(){
        console.log(`Modelo ${this.modelo}, Marca ${this.marca}, Software ${this.software}, color ${this.color}`)
    }


}

mobil.detalles();

var caramelo = {
    marca : 'Haribo',
    aspecto : 'Oso',
    sabor : 'Fresa',
    color : 'rojo',
    azucar : '3 gramos',
    detalles : function (){
        console.log(`Marca ${this.marca}, Aspecto ${this.aspecto}, Sabor ${this.sabor}, Color ${this.color}, azucar ${this.azucar}`)
    }
    
}
caramelo.detalles();