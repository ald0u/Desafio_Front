import React from 'react'

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
                    <a className="aCAccount" href="/CreateAccount" target="_blank">Create account</a><br />
                </div>
                <div className="aInside">
                    <a className="aLogIn" href="/LogIn" target="_blank">Log in</a>
                </div>
            </div>
        </div>
    )
}

export default CardSignIn;