import { Router } from 'next/router';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateAccountForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        profilePic: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('profilePic', formData.profilePic);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);

        try {
            const res = await fetch('http://localhost:8080/users', {
                method: 'POST',
                body: new URLSearchParams(formDataToSend).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            const result = await res.json();

            if (!result.success) {
                setError(result.error);
                return;
            }

            setSuccess('User created successfully');
            router.push('/enter');
        } catch (error) {
            setError('An error occurred while creating the account');
        }
    };

    return (
        <main className="max-w-full font-size[1rem] w-full m-auto grid gap-1 grid-cols-1 p-1 bg-white">
            <div className="rounded-md p-12 pt-6 m-auto w-[640px]">
                <div className="mb-6 text-center">
                    <h1 className="mt-4 text-gray-700 text-[1.875rem] leading-snug">
                        Create your account
                    </h1>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <div>
                        <label className="block text-gray-700 font-medium">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            minLength={4}
                            maxLength={10}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Username (Profile Pick) <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="profilePic"
                            value={formData.profilePic}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            minLength={4}
                            maxLength={10}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            minLength={4}
                            maxLength={30}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                            minLength={4}
                            maxLength={255}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CreateAccountForm;