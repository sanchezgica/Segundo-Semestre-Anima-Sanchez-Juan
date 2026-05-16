let usuarios = [];

function agregarUsuario(nombre, email) {
  usuarios.push({ id: usuarios.length + 1, nombre: nombre, email: email });
}

function mostrarUsuarios() {
  console.log(usuarios);
}

agregarUsuario("Mono", "mono@email.com");
agregarUsuario("Mona", "mona@email.com");
mostrarUsuarios();

function eliminarUsuario(indice) {
  usuarios.splice(indice, 1);
}
