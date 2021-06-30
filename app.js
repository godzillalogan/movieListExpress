const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const movieList = require('./movies.json')
const port = 3000



// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

//routes setting
app.get('/',(req,res) =>{

  const numberList = [1, 2, 3, 4, 5, 6, 7, 8]

  res.render('index', { movies: movieList.results })
  
})

app.get('/movies/1',(req,res) => {
  const movieOne = {
    title: 'Jurassic World: Fallen Kingdom',
    image:  'c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
    release_data: '2018-06-06 ',
    description: `
      Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group,recruits Owen Grady to help prevent the extinction of the dinosaurs once again.
    `
  }
  res.render('show', {movie : movieOne})
})

//start and listen on the Express server
app.listen(port, () =>{
	console.log(`Express is listening on localhost: ${port}`)
}) 