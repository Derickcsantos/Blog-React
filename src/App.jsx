import React, {useState}  from 'react';
import PostCard from './components/PostCard';
import CreatePost from './components/CreatePost';
import initialPosts from './data/posts';

function App(){
    const [posts, setPosts] = useState(initialPosts);

    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>Meu Blog</h1>

            <CreatePost onAddPost={handleAddPost} />

            {posts.map((post, index) => (
                <PostCard 
                    key={index}
                    title={post.title}
                    summary={post.summary}
                    date={post.date}
                    author={post.author}
                    tags={post.tags}
                />
            ))}
        </div>
    );
}

export default App;