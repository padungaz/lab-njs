// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('<p>The Middleware that handles just /</p>');
// });


// app.get('/users', (req, res) => {
//     res.send('<p>The Middleware that handles just /users</p>');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// lab 4.2

// const express = require('express');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// app.get('/users', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'users.html'));
// });

// app.use((req, res, next) => {
//     res.status(404).render('404');
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });


// lab 5.1

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
