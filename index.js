const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Rove Shelter Server is running...');
})

app.listen(port,()=>{
    console.log(`Rove Server is running on port ${port}`);
})