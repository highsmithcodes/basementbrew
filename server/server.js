const express = require('express')

const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/signup', require('./routes/signUp'))
app.use('/login', require('./routes/login'))
app.use('/dashboard', require('./routes/dashboard'))

const PORT = process.env.PORT || 1000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}.`))