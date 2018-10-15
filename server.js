const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

//Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Ok'
    });
});

app.listen(PORT, () => {
    console.log('Server is starting at PORT 8000');
});