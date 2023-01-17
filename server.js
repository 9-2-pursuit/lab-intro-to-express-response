const app = require('./app.js')


const PORT = 3010

// LISTEN
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})