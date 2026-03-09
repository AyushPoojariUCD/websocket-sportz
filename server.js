import express from 'express';

const app = express();

const PORT = 8000

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
})

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
});