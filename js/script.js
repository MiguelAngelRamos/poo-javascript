class TarjetaContacto {

  constructor(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }

  render() {
    return `
    <div class="tarjeta-contacto">
      <h2>${this.nombre}</h2>
      <p>Telefono: ${this.telefono}</p>
      <p>Email: ${this.email} </p>
    </div>
    `;
  }
}

let contactos = [
  new TarjetaContacto('Sofia',3133414515, 'sofia@correo.com'),
  new TarjetaContacto('Catalina', 18383838, 'catalina@correo.com'),
  new TarjetaContacto('Miguel', 31313341, 'miguel@correo.com'),
  new TarjetaContacto('Richard', 321441, 'richard@correo.com'),
];

const renderContactos = (contactos) => {
  const contenedor = document.createElement('div');
  contactos.forEach(contacto => {
    //* contenedor.innerHTML = contenedor.innerHTML + contacto.render();
    contenedor.innerHTML += contacto.render();
  });
  return contenedor;
}

const app = document.querySelector('#app');
app.appendChild(renderContactos(contactos));


