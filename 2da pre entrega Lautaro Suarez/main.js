let marca = prompt("Ingresar marca");
let modelo = prompt ("Ingresar modelo");
let año = Number(prompt("Ingresar año"));
let precio = Number(prompt("Ingresar precio"));
let color = prompt ("Ingresar color");
let sistemaOperativo = prompt("Ingresar Sistema Operativo");

function mostrarTelefonos(telefonos) {
  telefonos.forEach((celus) =>
    console.log(
      celus.marca +
        " - " +
        celus.modelo +
        " - " +
        celus.año +
        " - " +
        celus.precio +
        " - " +
        celus.color +
        " - " +
        celus.sistemaOperativo +
        " -  " 
    )
  );
}

function filtrarMarca(celus) {
  if (marca) {
      return celus.marca === marca;
  }
  return celus;
}

function filtrarModelo(celus) {
  if (modelo) {
      return celus.modelo === modelo;
  }
  return celus;
}

function filtrarAño(celus) {
  if (año) {
      return celus.año === año;
  }
  return celus;
}

function filtrarPrecio(celus) {
  if (precio) {
      return celus.precio === precio;
  }
  return celus;
}

function filtrarColor(celus) {
  if (color) {
      return celus.color === color;
  }
  return celus;
}

function filtrarSistemaOperativo(celus) {
  if (sistemaOperativo) {
      return celus.sistemaOperativo === sistemaOperativo;
  }
  return celus;
}

function filtrarTelefonos() {
  const resultado = telefonos
      .filter(filtrarMarca)
      .filter(filtrarAño)
      .filter(filtrarPrecio)
      .filter(filtrarColor)
      .filter(filtrarSistemaOperativo);

  if (resultado.length > 0) {
      mostrarTelefonos(resultado);
  } else {
      alert("No tenemos ese celular!");
  }
}

filtrarTelefonos();
