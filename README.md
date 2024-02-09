# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# PokesQuares
## Ecommerce


## Funcionalidad

Un ecommerce de cuadros sencillo, 
donde todo esta ambientado entorno al mundo pokemon, 

simple de utilizar, solo tenes que crear una firebase [https://firebase.google.com/?hl=es]
siguen los pasos y vinculan el repo con las keys que le dan
y en caso de querer usar las imagenes de los pokemon en la img de la BD copian en link cambiando el '1' por el numero del pokemon que quieran, es decir '2' va a mostrar a Ivysaur, el '3' a Venusaur y asi sucesivamente de esa forma van a poder adquirir la img de todos los pokemones hasta el momento 
[https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg]
ademas los datos que van a necesitar en la BD  para que todo funcione correctamente son
|CAMPO|TIPO|DATO|
| ------ | ------ |------ |
| category | string |hierba,fuego,agua(en caso de agregar mas tipos deberan agregar al nav para los filtros|
| description | string |lo que quieran|
| img | string |el link de img con el numero correspondiente| 
| nombre| string |nombre del pokemon|
| order | number |es el orden en que van a aparecer tanto por filtro como al inicial el repo(no ingresar dos order iguales)|
| price| number |precio elegido|
| stock| number |stock elegido|

una vez generada la base de datos, ya deberia estar listo para operar.

##Como iniciar
$ git clone https://github.com/NicolasLedesma1/FinalReactLedesma.git
$ cd ecommerce1
$ npm install
$ npm run dev

###Aplicacion funcionando
https://final-react-ledesma-5chhx2u72-nicolasledesma1s-projects.vercel.app