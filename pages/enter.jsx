import SignInButtons from '@/src/components/SignInButtons/SignInButtons';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import Login from '@/src/components/Login/Login';

const Enter = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLoginClick = (e) => {
        e.preventDefault();
        setShowLoginForm(true);
    };

    return (
        <main className="max-w-full font-size[1rem] w-full m-auto grid gap-1 grid-cols-1 p-1 bg-white">
            <div className="rounded-md p-12 pt-6 m-auto w-[640px]">
                <div className="mb-6 text-center">
                    <Image
                        className="mx-auto h-12 block"
                        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
                        alt="DEV Community"
                        width={48}
                        height={48}
                    />
                    <h1 className="mt-4 text-gray-700 text-[1.875rem] leading-snug">
                        Join the DEV Community
                    </h1>
                    <p className="mt-1 text-gray-700 text-base">
                        DEV Community is a community of 1,714,810 amazing developers
                    </p>
                </div>
                {showLoginForm ? (
                    <Login setShowLoginForm={setShowLoginForm} />
                ) : (
                    <div>
                        <div className="mb-4 grid gap-3 w-full">
                            <SignInButtons />
                            <Link href="/createacountform">
                                <div
                                    className="flex items-center justify-center p-3 w-full rounded-md bg-white border border-gray-300 space-x-2 cursor-pointer"
                                    data-no_instant=""
                                >
                                    <span className="flex-1 text-center font-medium text-sm text-primary">
                                        Sign up with Email
                                    </span>
                                </div>
                            </Link>
                            <div className="flex font-medium text-sm w-full justify-center self-center items-center text-gray-900">
                                By signing up, you are agreeing to our{" "}
                                <a href=" ">privacy policy</a>, <a href=" ">terms of use</a> and{" "}
                                <a href=" ">code of conduct</a>.
                            </div>
                            <div className="text-center text-gray-700 font-normal">
                                Already have an account?{" "}
                                <a href="#" onClick={handleLoginClick} className="hover:text-blue-600">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Enter;
