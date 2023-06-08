const express = require('express');
const app = express();

app.get("/teste", async (req, res) => {
    res.send("Joao de Deus");
});

app.listen(3000, () => {
    console.log("Joao de Deus");
});
