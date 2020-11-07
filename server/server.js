const express = require('express');
const server = express();

const PORT = process.env.port || 4000
server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));

const articleRouter = require('./article/router');

// to format requests into JSON
server.use(express.json())
// to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }));

server.use('/articles', articleRouter)