const express = require('express') //USAR EXPRESS - COMMON

const app = new express() //INICIALIZAR EXPRESS

//Ruta /
app.get('/',(request, response)=>{response.send("Hola")})

app.get('/franquicias',(request, response)=>{response.send("Información de franquicias")})

app.get('/simple',(request, response)=>{response.send("Hamburguesa simple")})

app.use((req, res)=> {res.send("<h1 style='font-size:100px; text-align:center; color: blue;margin-top: 20%;'>Page not found - 404<br><img style='margin-left: 30px; width: 100px; heigth: 100px' src='https://img.freepik.com/fotos-premium/persona-aspecto-triste-cara-triste-cabeza_1083198-4218.jpg'</h1>")})

//Se define el puerto
app.listen(3000)
// Mensaje de exito
console.log("Server - OK")