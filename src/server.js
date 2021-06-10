import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

 let idCount = 2;
 const posts = [{
        id: 1,
         title: 'Hello World',
         coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
        contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
         content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
        commentCount: 2
       },{id: 2,
         title: 'Hello World',
         coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
         contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
         content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
         commentCount: 2}];

      
app.get('/posts', (req, res) => {
    res.send(posts);
});
let post ={};
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
        commentCount: 2}

    posts.push(newPostObj);
    res.send(posts);
    console.log('oi');
});




app.listen(4000, () => {
    console.log("rodagndooi");
});