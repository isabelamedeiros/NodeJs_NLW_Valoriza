import express from "express";

const app = express();

app.get('/teste', (request, response) => {
return response.send("Olá Mundo!")
})

app.post('/teste-post', (request, response) => {
    return response.send("Metodo Post!")
})

app.listen(3000, () => console.log("Server is running"))