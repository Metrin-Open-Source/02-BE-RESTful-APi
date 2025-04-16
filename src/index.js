const express = require('express');
const app = express();
const port = 3000;
const bukuRoute = require('./route/buku.route');
app.use(express.json());

app.use('/buku', bukuRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})