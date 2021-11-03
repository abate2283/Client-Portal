const express = require('express');
const bodyParser = require('body-parser'); 
const { randomBytes} = require('crypto');


const app = express();
app.use(bodyParser.json());

const commetsByPostId = {};

const posts = {};

app.get('/posts/:id/comments', (req, res) =>{
    res.send(commentsByPostalId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex')
    const { content } = req.body;

    const comments = commentsByPostalId[req.params.id] || [];

    comments.push({id: commentID, content });
    
    commentsByPostalId[req.params.id] = comments;
    
    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');

});