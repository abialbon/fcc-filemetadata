const express   = require("express");
const app       = express();
const path      = require("path");
const PORT      = process.env.PORT || 3000;
const IP        = process.env.IP || '127.0.0.1';
const multer    = require("multer");
const upload    = multer();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/file', upload.single('userfile'), (req, res) => {
    let response = {
        size: req.file.size
    }
    res.json(response); 
});

app.listen(process.env.PORT, process.env.IP, () => {
   console.log('The app is running!'); 
});