import React from 'react';
import Link from 'next/link';

const CardSignIn = () => {
    return (
        <div className="containerAside1">
            <div className="textInside">
                <h2 className="pBold">
                    DEV Community is a community of 1,258,580 amazing developers
                </h2>
            </div>
            <p className="textInside_2">
                We re a place where coders share, stay up-to-date and grow their careers.
            </p>
            <div className="btnInside">
                <div className="aInside">
                    <Link href="/enter" legacyBehavior>
                        <a className="aCAccount">Create account</a>
                    </Link>
                </div>
                <div className="aInside text-center mt-4">
                    <Link href="/LogIn" legacyBehavior>
                        <a className="aLogIn">Log in</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardSignIn;
