import React from 'react'

const Footer = () => {
    return (
        <div className="footerContainer">
            <p className="footerText">
                <span className="highlight">DEV Community</span> A constructive and inclusive social network for software developers. With you every step of your journey.
            </p>
            <p className="footerText">
                Built on <span className="highlight">Forem</span>— the <span className="highlight">open source</span> software that powers <span className="highlight">DEV</span> and other inclusive communities.
            </p>
            <p className="footerText">
                Made with love and <span className="highlight">Ruby on Rails</span>. DEV Community©2016 - 2024.
            </p>
        </div>
    )
}

export default Footer;