import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

 let idCount = 0;
 const posts = [];
 const comments = [];
 let responseComent = [];
      
app.get('/posts', (req, res) => {
    res.send(posts);
});

let post ={};
let counter = 0;
app.get('/posts/:postId', (req, res) => {
    const id = req.params.postId;
    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id === parseInt(id)) {
            post.id = id,
            post.title = posts[i].title,
            post.coverUrl = posts[i].coverUrl,
            post.contentPreview = posts[i].contentPreview,
            post.content = posts[i].content
         }
         res.send(post);
    }
});

app.get('/posts/:postId/edit', (req, res) => {
    const id = req.params.postId;
    for(let i = 0; i < posts.length; i++) {
        if(posts[i].id === parseInt(id)) {
            post.id = id,
            post.title = posts[i].title,
            post.coverUrl = posts[i].coverUrl,
            post.contentPreview = posts[i].contentPreview,
            post.content = posts[i].content
         }
         res.send(post);
    }
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
     idCount++;
    const newPostObj = {
        id: idCount,
        title: newPost.title,
        coverUrl: newPost.coverUrl,
        contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
        content: newPost.content,
        commentCount: counter
    }

    posts.push(newPostObj);
    res.send(posts);
    console.log('oi');
});







app.post('/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const comment = {
            id: comments.length,
            postId: postId,
            author: req.body.author,
            content: req.body.content
        }
    //posts[postId].commentCount= counter + 1;
    comments.push(comment);
    res.send(comment);
});



app.get('/posts/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    responseComent = comments.filter(comment => comment.postId === postId);
    posts[postId].commentCount = counter +1
    res.send(responseComent);
});



app.put('/posts/:postId', (req, res) => { 
    const id = parseInt(req.params.postId);

    const index = posts.findIndex((post)=> {
        return post.id === id;
    })

    const newPost = req.body;
    posts[index].title = newPost.title; 
    res.send(posts);
    console.log('oi');
});


app.listen(4000, () => {
    console.log("rocdbagndgjooi");
});