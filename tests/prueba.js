const obtenerArticulos = require('./index');
 
obtenerArticulos.getArticles(3, /*3 es el numero de articulos a obtener*/ function(err, Articulos){
   console.log (Articulos) //Obtener titulo, contenido, fecha de publicacion y redireccion
   console.log (Articulos.title) //Obtener solo titulos
   console.log (Articulos.preview) //Obtener solo los contenidos
   console.log (Articulos.date) //Obtener solo las fechas
   console.log (Articulos.redirect) //Obtener solo las redirecciones
});
