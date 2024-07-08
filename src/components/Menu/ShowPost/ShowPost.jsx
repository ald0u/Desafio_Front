import Image from 'next/image';
import React from 'react';

const ShowPost = ({ post }) => {
    return (
        <div key={post.id} className="postCard bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4">
            {post.image && (
                <Image
                    src={post.image}
                    alt="Post image"
                    width={600}
                    height={400}
                    className="postImage w-full h-auto rounded-t-lg"
                />
            )}
            <div className="postContent p-4">
                <div className="postHeader flex items-center mb-4">
                    <Image
                        src={post.authorAvatar}
                        alt="Author avatar"
                        width={40}
                        height={40}
                        className="authorAvatar w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <p className="authorName text-gray-800 font-bold">{post.author}</p>
                        <p className="postDate text-gray-500 text-sm">{post.date}</p>
                    </div>
                </div>
                <h2 className="postTitle text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="postBody text-gray-600 mb-4">{post.body}</p>
                <div className="postFooter flex justify-between items-center mt-4">
                    <p className="postReactions text-gray-600 text-sm">
                        <span>🔥👏🎉</span> {post.reactions} Reactions
                    </p>
                    <p className="postComments text-gray-600 text-sm">
                        <span>💬</span> {post.comments} Comments
                    </p>
                    <p className="postReadTime text-gray-600 text-sm">{post.readTime}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowPost;
