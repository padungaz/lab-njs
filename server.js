const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<p>The Middleware that handles just /</p>');
});


app.get('/users', (req, res) => {
    res.send('<p>The Middleware that handles just /users</p>');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
