const express = require('express')

const app = express();

const PORT = 3000;

const path = require('path')

app.use(express.static('public'))
// app.get('/', (req,res)=>{
//     res.sendFile(path.resolve(__dirname) + '/index.html')
// })
// app.get('/about', (req,res)=>{
//     res.sendFile(path.resolve(__dirname) + '/about.html')
// })


app.listen(PORT, () => {     console.log(`listening on port ${PORT}`)
});

30:12

