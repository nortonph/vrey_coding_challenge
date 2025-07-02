import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('..welcome to consumptuous..')
})

app.listen(port, () => {
    console.log(`consumptuous server running on port ${port}`)
});
