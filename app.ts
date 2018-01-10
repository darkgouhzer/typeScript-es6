<<<<<<< HEAD
function activar( quien:string, objeto:string ="batiseñal", momento?:string){

  let mensaje:string;
  if(momento)
  {
    mensaje = `${ quien } activó la ${ objeto } en la ${ momento }`;
  }else{
    mensaje = `${ quien } activó la ${ objeto }`;
  }

  console.log(mensaje);
}


activar("Gordon", "batiseñal", "tarde");
=======
let miFuncion =function( a ){
  return a;
}

let miFuncionF = a => a;
let miFuncion2 = function(a:number, b:number)
{
  return a+b;
}

let mifuncion2F = (a:number,b:number) => a+b;

let miFuncion3 = function(nombre:string)
{
  nombre = nombre.toUpperCase();
  return nombre;
}

let mifuncion3F = (nombre:string) =>{
  nombre = nombre.toUpperCase();
  return nombre;
}

let nombre  = "pedro"
let hulk = {
  nombre: "Bruce",
  smash(){
    setTimeout(()=> console.log(this.nombre+ " smash!!"), 1500);
  }
}

hulk.smash();
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
>>>>>>> 2ceab9b0df0f1dfb6c5dd5062396ebe3178c6c15
