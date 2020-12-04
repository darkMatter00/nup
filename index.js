var express = require('express')
    bodyParser = require('body-parser')
    https = require('https')
    request = require('request')



var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

var api_url = 'https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec'

app.get('/courses', (req, res)=>{
    var data
    request.get(api_url,{json:true}, (err, resp, body)=>{
        if (err) {res.end('Error')}
        //console.log(body)
        //console.log(data[0].course_name)
        res.render('courses.ejs', {courses : body}
        )
    })
    
    
})

app.post('/parent_details', urlencodedParser, (req, res)=>{
    res.redirect('/')
})

var PORT = 5004

var server = app.listen(PORT, ()=>{
    console.log('listening at port', PORT)
})