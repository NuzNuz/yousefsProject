const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const fileUpload = require('express-fileupload');
const pdf = require('pdf-parse');
import serverless from 'serverless-http';
app.use("/", express.static("public"));
app.use(fileUpload());


const router = express.Router();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow all domains
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

router.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }
    pdf(req.files.file).then(data => {
        res.send(data.text);
    });
});


app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);