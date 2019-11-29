const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);   
}

//getPosts fonksiyonunu callback olarak verdik böylece fonksiyon çalışmak için post three'nin eklenmesini bekledi.
createPost({title:'Post Three', body:'This is post three'},getPosts);

