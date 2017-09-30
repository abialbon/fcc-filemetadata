const express   = require("express");
const app       = express();
const path      = require("path");
const PORT      = process.env.PORT || 3000;
const IP        = process.env.IP || '127.0.0.1';

app.use(express.static(path.join(__dirname, 'public')));

app.post('/file', (req, res) => {
   res.send('The file upload path was hit!'); 
});

app.listen(process.env.PORT, process.env.IP, () => {
   console.log('The app is running!'); 
});