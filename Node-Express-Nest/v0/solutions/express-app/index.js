const express = require('express');
const app = express();
const router = require('../task-01')

app.use(express.json());
app.use('/todos', router)

// TODO: Add routes and middleware here
app.get('/', (req, res) => {
  res.send('Express ToDo App Template');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}`);
}); 

module.exports = app; 