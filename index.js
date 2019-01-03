import express from 'express';

const app = express();
const PORT = 3000;

app.set('trust proxy',true); 

const parseHeaders = (req, res) => {
    let ip = req.ip;
    let language = req.headers['accept-language'];
    const source = req.headers['user-agent'];

    res.json({ip, language, source});

  }

app.use("/", express.static("./public"));

app.get('/api/whoami', parseHeaders);
   
app.listen(PORT, () => {
    console.log(`Timestamp Microservice is running on port ${PORT}...`);
});
