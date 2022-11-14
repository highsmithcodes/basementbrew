const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const router = require('./routes/jwtAuth');
const dashboardRouter = require('./routes/dashboard.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json())

// app.use('/signup', require('./routes/signUp'))
// app.use('/login', require('./routes/login'))
// app.use('/dashboard', require('./routes/dashboard'))

app.use('/auth', router);
app.use('/dashboard', dashboardRouter);

const PORT = process.env.PORT || 1000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}.`))