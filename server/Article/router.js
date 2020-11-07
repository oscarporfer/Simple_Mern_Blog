const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
  // Create an article with form data
})

const mongoose = require('mongoose')
// connect to the database
mongoose.connect(`mongodb://localhost:27017/simple-mern-blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// open the connection
const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))

const Article = require('./article.model')

router.post('/', (request, response) => {
  Article.create( request.body, (error, article) => {
    if (error) {
      console.log(`Error creating Article, ${new Date()}: ${error}`)
      response.status(400).json(error)
    }
    else {
      response.status(201).json(article)
    }
  })
})

router.get('/:articleId', (request, response) => {
  Article.findById(request.params.articleId, (error, article) => {
    if (error) {
      console.log(error)
      response.status(400).json(error)
    }
    else {
      if (!article) {
        response.sendStatus(410)
      }
      else {
        response.status(200).json(article)
      }
    }
  })
})



module.exports = router