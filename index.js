const express = require('express');
const app = express();


// function logRequest(req, res, next) {
//       console.log(`Resuest recieved ${new Date().toString()}, ${req.url}, ${req.method}`);
//       next();
// };

// app.use(logRequest);

// app.get('/', (req, res) => {
//       res.send('<h1>Hello , World</h1>');
// });



app.use(express.static('public'));














app.listen(5000, () => {
      console.log('server run on port 5000');
})