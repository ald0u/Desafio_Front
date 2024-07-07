import Image from 'next/image'
import React from 'react'

const RevelantTop = () => {
    return (
        <div className="postCard bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <Image
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
                alt="Post image"
                width={600}
                height={400}
                className="postImage w-full h-auto rounded-t-lg"
            />
            <div className="postContent p-4">
                <div className="postHeader flex items-center mb-4">
                    <Image
                        src="/path/to/author/avatar.jpg"
                        alt="Author avatar"
                        width={40}
                        height={40}
                        className="authorAvatar w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                        <p className="authorName text-gray-800 font-bold">Angel Romero Cruz</p>
                        <p className="postDate text-gray-500 text-sm">9 jun</p>
                    </div>
                </div>
                <h2 className="postTitle text-xl font-bold text-gray-900 mb-2">Mi primer comentario</h2>
                <p className="postTags text-gray-600 mb-4">#Javascript #discuss #jokes</p>
                <div className="postFooter flex justify-between items-center mt-4">
                    <p className="postReactions text-gray-600 text-sm">
                        <span>🔥👏🎉</span> 36 Reactions
                    </p>
                    <p className="postComments text-gray-600 text-sm">
                        <span>💬</span> 34 Comments
                    </p>
                    <p className="postReadTime text-gray-600 text-sm">26 min read</p>
                </div>
            </div>
        </div>
    )
}

export default RevelantTop;
