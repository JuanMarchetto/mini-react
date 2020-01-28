//Inicializo un Estado
let state: {
  name: String;
} = {
  name: "usuario"
};

//Defino la Funcion,llamemosle "render",
//que reemplaza el contenido de toda la pagina con el "template" o "vista" que nosotros definamos.
const render: Function = () => {
  let page = `<h1 onClick='setName("Sergio");'> hola ${state.name} </h1>`;
  document.body.innerHTML = page;
};

//Defino la Funcion setStat() que recive un par clave valor y retorna el Estado con ese valor cambiado
//en este caso, como el estado cambio quiero dibujar nuevamente la pagina, por eso vuelvo a llamar render()
const setState: Function = (key, value) => {
  state[key] = value;
  render();
};

//Inicializo la pagina invocando la funcion render por primera vez()
render();

//Un ejemplo de uso de la funcion setState
const setName = name => setState("name", name);
