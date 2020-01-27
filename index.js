let name = "";

render = () => {
    let page = `<h1 onClick='setName("Sergio");'>hola ${name}</h1>`;
    document.body.innerHTML = page
};

setName = (value) => {
    name = value;
    render();
}

render()
