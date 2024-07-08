import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

const Login = ({ setShowLoginForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleCancelClick = (e) => {
        e.preventDefault();
        setShowLoginForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await res.json();

            if (!res.ok) {
                setError(result.error);
                toast.error(result.error);
                return;
            }

            localStorage.setItem('token', result.data.token);
            toast.success('Login successful');
            router.push('/');
        } catch (error) {
            setError('An error occurred while logging in');
            toast.error('An error occurred while logging in');
        }
    };

    return (
        <div className="relative">
            <button
                className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                onClick={handleCancelClick}
            >
                X
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-red-500">{error}</p>}
                <div>
                    <label className="block text-gray-700 font-medium">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Password <span className="text-red-500">*</span></label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="remember" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-gray-700">Remember me</label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                    >
                        Log in
                    </button>
                </div>
                <div className="flex justify-between">
                    <a href="#" className="text-blue-600">Forgot password?</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
