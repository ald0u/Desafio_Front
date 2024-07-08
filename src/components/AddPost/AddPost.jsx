import React from 'react';

const AddPost = ({ newPost, handleInputChange, handleAddPost }) => {
    return (
        <form onSubmit={handleAddPost} className="mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Título</label>
                <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Imagen</label>
                <input
                    type="file"
                    name="image"
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-medium">Contenido</label>
                <textarea
                    name="body"
                    value={newPost.body}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                />
            </div>
            <button
                type="submit"
                className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
                Publicar
            </button>
        </form>
    )
}

export default AddPost;
