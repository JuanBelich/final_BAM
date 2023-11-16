let entrada=["Ensalada tricolor con tomates, zanahoria y remolachas","Brusqueta Capresse","Brusqueta Funghi","Torre de verduras escalivadas","Ensalada verde, manzana verde, queso azul y vinagreta de aceto","Tarta de jamon y queso","Bruschetta de champignones","Ensalada caprese","Jamon con palmitos","Pizzeta a la fugazzeta","Torre de berenjenas gratinadas","Sopa de verduras","Ensalada mix verdes con rabanitos y queso azul","Bruschetta con queso de cabra y cebolla caramelizada","Empanada de jamon y queso","Ceviche de salmon y mango","Panceta a la criolla","Ensalada mix verdes, queso azul y frutos secos","Fritatta de verdeo y hongos","Esparragos en panceta gratinados","Ensalada tibia de pollo","Melon con jamon","Creppes de verdura","Ensalada Caesar","Ensalada Waldorf con jamon bocatti"]

let principal=["Pollo mechado con salsa de mostaza","Pollo al provenzal","Fetuccinis al verdeo","Chop Suey de ternera y arroz","Ravioles de salmon en crema de hierbas","Pollo al verdeo","Entrecorte al roquefort","Solomillo de cerdo al Malbec","Sorrentinos de jamon y queso con Filetto y albahaca","Solomillo de cerdo al ajillo","Carne de cerdo a la mostaza","Fetuccinis con Filetto y pesto","Matambre de ternera a la fugazzeta","Pechuga rellena","Ravioles de jamon y queso con salsa bolognesa"]

let postre=["Tarta Vianner","Gelato","Tiramisú","Panna Cotta","Creppes tibios de durazno y nutella","Manzanas al horno","Ensalada de frutas o helado","Copa Melba","Torta de vainilla y chocolate con salsa de frutos rojos","Copa brownie","Clasico flan casero","Clasico Vigilante","Manjar Tower con helado","Panna cotta de malbec","Biscuit de chocolate y helado","Copa mendocina","Mil hojas con crema de chocolate","Copa jamaica","Creppes tibios de dulce de leche", "Chocotorta con frutos rojos", "Duraznos al chantilly","Copa oreo","Copa tiramisu","Copa chocolina","Mousse de mango, frutos rojos y crocante de chocolate","Chocotorta","Mousse de mango y crocante de chocolate","Banana split","Minitorta de durazno, crema y dulce de leche"];

/// Entrada ///
let random=(Math.floor(Math.random()*entrada.length));
let randomE2=(Math.floor(Math.random()*entrada.length));
let randomE3=(Math.floor(Math.random()*entrada.length));

if (random == randomE2 || random == randomE3 ){
    random=(Math.floor(Math.random()*entrada.length));
}else if(randomE2 == randomE3 || randomE2==random){
    randomE2=(Math.floor(Math.random()*entrada.length));
}else if(randomE3 == randomE2 || randomE3==random){
    randomE3=(Math.floor(Math.random()*entrada.length));
}
document.getElementById("entrada").innerHTML=entrada[random];
document.getElementById("entradaE2").innerHTML=entrada[randomE2];
document.getElementById("entradaE3").innerHTML=entrada[randomE3];


/// Plato principal ///
let randomP=(Math.floor(Math.random()*principal.length));
let randomP2=(Math.floor(Math.random()*principal.length));
let randomP3=(Math.floor(Math.random()*principal.length));

if (randomP == randomP2 || randomP == randomP3 ){
    randomP=(Math.floor(Math.random()*principal.length));
}else if(randomP2 == randomP3 || randomP2==randomP){
    randomP2=(Math.floor(Math.random()*principal.length));
}else if(randomP3 == randomP2 || randomP3==randomP){
    randomP3=(Math.floor(Math.random()*principal.length));
}

document.getElementById("principal").innerHTML=principal[randomP];
document.getElementById("principal2").innerHTML=principal[randomP2];
document.getElementById("principal3").innerHTML=principal[randomP3];

/// Postres ///
let randomPostre=(Math.floor(Math.random()*postre.length));
let randomPostre2=(Math.floor(Math.random()*postre.length));

if (randomPostre == randomPostre2){
    randomPostre=(Math.floor(Math.random()*principal.length));
}

document.getElementById("postre").innerHTML=postre[randomPostre];
document.getElementById("postre2").innerHTML=postre[randomPostre2];

