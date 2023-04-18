export default class Pelicula {
    #codigo;
    #titulo;
    #descripcion;
    #director;
    #imagen;
    #genero;
    #anio;
    #duracion;
    #pais;
    #reparto;
  
    constructor(titulo, descripcion, director, imagen, genero, anio, duracion, pais, reparto) {
      this.#codigo = uuidv4();
      this.#titulo = titulo;
      this.#descripcion = descripcion;
      this.#director = director;
      this.#imagen = imagen;
      this.#genero = genero;
      this.#anio = anio;
      this.#duracion = duracion;
      this.#pais = pais;
      this.#reparto = reparto;
    }
  
    // Getters
    get codigo() {
      return this.#codigo;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    get director() {
      return this.#director;
    }
  
    get imagen() {
      return this.#imagen;
    }
  
    get genero() {
      return this.#genero;
    }
  
    get anio() {
      return this.#anio;
    }
  
    get duracion() {
      return this.#duracion;
    }
  
    get pais() {
      return this.#pais;
    }
  
    get reparto() {
      return this.#reparto;
    }
  
    // Setters
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    set titulo(titulo) {
      this.#titulo = titulo;
    }
  
    set descripcion(descripcion) {
      this.#descripcion = descripcion;
    }
  
    set director(director) {
      this.#director = director;
    }
  
    set imagen(imagen) {
      this.#imagen = imagen;
    }
  
    set genero(genero) {
      this.#genero = genero;
    }
  
    set anio(anio) {
      this.#anio = anio;
    }
  
    set duracion(duracion) {
      this.#duracion = duracion;
    }
  
    set pais(pais) {
      this.#pais = pais;
    }
  
    set reparto(reparto) {
      this.#reparto = reparto;
    }
  }
