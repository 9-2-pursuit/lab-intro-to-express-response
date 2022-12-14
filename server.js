// DEPENDENCIES
const app = require('./app.js')

// CONFIGURATION
const PORT = 3010

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})
