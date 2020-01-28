let state: {
  name: String;
} = {
  name: "usuario"
};

const render: Function = () => {
  let page = `<h1 onClick='setName("Sergio");'> hola ${state.name} </h1>`;
  document.body.innerHTML = page;
};

const setState: Function = (key, value) => {
  state[key] = value;
  render();
};

render();

const setName = name => setState("name", name);
