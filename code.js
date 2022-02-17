/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#sobre-mi");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre")
  datosPersona.edad = (2021 - prompt("Ingrese su año de nacimiento") - 1)
  datosPersona.ciudad = prompt("Ingrese el nombre de su ciudad")
  datosPersona.interesPorJs = confirm("Le interesa JavaScript?")
  if (datosPersona.interesPorJs) {
    datosPersona.interesPorJs = " Si "
  } else {
    datosPersona.interesPorJs = "No"
  }


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerHTML = datosPersona.nombre
  document.getElementById("edad").innerHTML = datosPersona.edad
  document.getElementById("ciudad").innerHTML = datosPersona.ciudad
  document.getElementById("javascript").innerHTML = datosPersona.interesPorJs


}

let flag = true;
function recorrerListadoYRenderizarTarjetas() {
  if (flag) {
    let contenedor = document.getElementById("fila");
    listado.forEach(indice => {
      contenedor.innerHTML = contenedor.innerHTML + ` <div class = "caja">
    <img src="${indice.imgUrl}" alt= "${indice.lenguajes}">
    <p class ="lenguajes">${"Lenguaje: " + indice.lenguajes}</p>
    <p class ="bimestre">${"Bimestre: " + indice.bimestre}</p>
  </div>`
    });
  }
  flag = false;

  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.getElementById("sitio")
  sitio.classList.toggle("dark")



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
window.onkeypress = (e)=> {
  if (e.key=== "f" || e.key === "F") {
    verMasBtn.classList.remove("oculto")
  }
}
