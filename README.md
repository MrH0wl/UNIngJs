<h1 align="center">
  <br>
  <a href="https://uni.edu.ni"><img src="https://uni.edu.ni/assets/images/logouni12.png" alt="WebTorrent" width="200"></a>
  <br>
  UNIngJs
  <br>
  <br>
</h1>

<h4 align="center">UNIngJs: Un API sobre articulos de uni.edu.ni</h4>

<p align="center">
  <a href="https://github.com/MrH0wl/UNIngJs"><img src="https://img.shields.io/badge/repo-github-brightgreen" alt="travis"></a>
  <a href="https://www.npmjs.com/package/uningjs"><img src="https://img.shields.io/npm/v/uninjs.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/uningjs"><img src="https://img.shields.io/npm/dm/uningjs.svg" alt="npm downloads"></a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide"></a>
  <a href="https://www.twitter.com/SecMare"><img src="https://img.shields.io/twitter/follow/SecMare?label=Contacto&style=social"></a>
</p>

## Descripción

UNIngJs es un modulo para **node.js** que extrae los articulos oficiales de http://archivodenoticias.uni.edu.ni/Articulo/
Fue desarrollado con la intencion de ayudar a la facil extracción de información de la pagina de UNI-Nicaragua.

---
### Instalación

Para instalar UNIngJs en node con `require('uningjs')`, debes ejecutar:

```bash
npm install uningjs
```


## Uso

```
const obtenerArticulos = require('uningjs');
 
obtenerArticulos.getArticles(3, /*3 es el numero de articulos a obtener*/ function(err, Articulos){
   console.log (Articulos) //Obtener titulo, contenido, fecha de publicacion y redireccion
   console.log (Articulos.title) //Obtener solo titulos
   console.log (Articulos.preview) //Obtener solo los contenidos
   console.log (Articulos.date) //Obtener solo las fechas
   console.log (Articulos.redirect) //Obtener solo las redirecciones
});

```

```
Con el ejemplo anterior podrán obtener los detalles exactos de los articulos, para usarlos individualmente o en conjunto.
```

El [ejemplo](tests/prueba.js) lo pueden encontrar en la carpeta tests, por si desean ojearlo.

---
## Contribución

El desarrollo del proyecto se lleva a cabo en github, https://github.com/MrH0wl/UNIngJs,
**open an issue** allí para informar errores o sugerir mejoras. La colaboración es muy bienvenida, solo `bifurca(fork)` el proyecto en github y envía `pull request` al repositorio principal.

---
## Licencia

**UNIngJs** se publica bajo la licencia GNU General Public License v3. Mira en [LICENCIA](LICENSE) para mas detalle.

---

## Desarrolladores
  - **Autor:**
  👤 **Jackson Blandon**


Lista de contribudores: https://github.com/MrH0wl/UNIngJs/graphs/contributors

---
## Soporte
Si crees que encontraste un bug o tienes problemas con la instalacion, puedes hacer lo siguiente:

- **[Abre un ticket](https://github.com/webtorrent/webtorrent/issues/new)**: para reportar bugs.
- **[Ayuda con los bugs](https://github.com/webtorrent/webtorrent/issues?state=open)**: así podrás ayudar a los nuevos en el mundo del `coding`.

El proyecto es de [CODIGO ABIERTO](https://github.com/webtorrent/.github/blob/master/CONTRIBUTING.md)! Así que no dudes en colaborar.

---
