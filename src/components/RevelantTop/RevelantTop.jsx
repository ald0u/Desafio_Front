import React, { useState } from 'react';
import AddPost from '../AddPost/AddPost';
import ShowPost from '../Menu/ShowPost/ShowPost';

const RevelantTop = () => {
    const [showAddPost, setShowAddPost] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        image: '',
        body: ''
    });
    const [posts, setPosts] = useState([
        {
            title: 'Mi primer comentario',
            body: 'Contenido del primer comentario',
            image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png',
            author: 'Angel Romero Cruz',
            date: '9 jun',
            reactions: 36,
            comments: 34,
            readTime: '26 min read',
            authorAvatar: '/path/to/author/avatar.jpg'
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setNewPost({ ...newPost, [name]: files[0] });
        } else {
            setNewPost({ ...newPost, [name]: value });
        }
    };

    const handleAddPost = (e) => {
        e.preventDefault();
        const newPostToAdd = {
            ...newPost,
            author: 'Your Name',
            date: new Date().toLocaleDateString(),
            reactions: 0,
            comments: 0,
            readTime: '1 min read',
            image: newPost.image, 
            authorAvatar: '' 
        };
        setPosts([newPostToAdd, ...posts]);
        setNewPost({
            title: '',
            image: '',
            body: ''
        });
        setShowAddPost(false);
    };

    return (
        <div>
            <div className="mb-6">
                <button
                    onClick={() => setShowAddPost(!showAddPost)}
                    className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    {showAddPost ? 'Cancelar' : 'Agregar Post'}
                </button>
            </div>

            {showAddPost && (
                <AddPost 
                    newPost={newPost} 
                    handleInputChange={handleInputChange} 
                    handleAddPost={handleAddPost} 
                />
            )}

            {posts.map((post, index) => (
                <ShowPost key={index} post={post} />
            ))}
        </div>
    );
};

export default RevelantTop;
