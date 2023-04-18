
let btnThemeLight = document.querySelector("#btnThemeLight");
let btnThemeDark = document.querySelector("#btnThemeDark");

btnThemeLight.addEventListener("click", () => cambiarTema("light"));
btnThemeDark.addEventListener("click", () => cambiarTema("dark"));

//leer el localStorage
let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado)
cambiarTema(temaConfigurado)

function cambiarTema(color) {
  console.log(color);
  //data-bs-theme = 'light/dark'
  document.querySelector("html").setAttribute("data-bs-theme", color);
  //guardar en Localstorage
  localStorage.setItem('tema', JSON.stringify(color));
}