const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
const playersRouter = require('./routes/players');
const teamsRouter = require('./routes/teams');
const gamesRouter = require('./routes/games');

app.use('/', indexRouter);
app.use('/players', playersRouter); 
app.use('/teams', teamsRouter); 
app.use('/games', gamesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
