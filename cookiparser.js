const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/',(req,res)=>{
    console.log("Cookies :",req.cookies)

    console.log("Signed Cookies :",req.signedCookies)
})

app.listen(7000)