import express from "express";

const PORT = 9999;

const app = express();

app.use(express.static("./public"));
app.use(express.static("./public/views"));

// Fallbackroute falls es vorher keinen match gibt
app.use((_, res) => {
    res.status(404).send('Seite nicht gefunden!');
});

app.listen(PORT, () => console.log('Server runs on Port', PORT));