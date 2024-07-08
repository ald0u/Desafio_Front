import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';
import { useRouter } from 'next/router';
import { create } from '@/pages/api/api';
import { getUserById } from '@/pages/api/user';
import ShowPost from '../Menu/ShowPost/ShowPost';

const CreatePost = ({ setShowCreatePost }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const router = useRouter();

    const handleTagChange = (event) => {
        const { value } = event.target;
        const newTags = value.split(/[, ]+/);
        setTags(newTags);
    };

    const onSubmit = async (data) => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (!token || !userId) {
            toast.error("You need to be logged in to create a post");
            return;
        }

        try {
            const user = await getUserById(userId, token);

            if (!user || user.error) {
                toast.error("User not found");
                return;
            }

            const postData = {
                title: data.title,
                image: data.image, 
                body: data.body,
                author: user.data.user._id,
                tags,
            };

            const result = await create(postData, token);
            toast.success("Post created successfully");
            setPosts([result.data, ...posts]);
            setShowCreatePost(false); 
        } catch (error) {
            toast.error("An error occurred while creating the post");
        }
    };

    return (
        <main className="max-w-full font-size[1rem] w-full m-auto grid gap-1 grid-cols-1 p-1 bg-white">
            <Toaster />
            <form onSubmit={handleSubmit(onSubmit)} className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Title</label>
                    <input
                        type="text"
                        {...register('title', { required: true })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Image URL</label>
                    <input
                        type="text"
                        {...register('image', { required: true })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.image && <span className="text-red-500">Image URL is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Content</label>
                    <textarea
                        {...register('body', { required: true })}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.body && <span className="text-red-500">Content is required</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Tags</label>
                    <input
                        type="text"
                        onChange={handleTagChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Add tags separated by commas"
                    />
                </div>
                <button
                    type="submit"
                    className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                >
                    Publish
                </button>
            </form>
            <div className="mt-6">
                {posts.map((post, index) => (
                    <ShowPost key={index} post={post} />
                ))}
            </div>
        </main>
    );
};

export default CreatePost;
