import Image from 'next/image'
import React from 'react'

import Terms from '../../images/logos_svg/terms.svg';
import Codesvg from '../../images/logos_svg/code.svg';
import Privacysvg from '../../images/logos_svg/privacy.svg';

const otherItems = [
    { icon: Codesvg, text: 'Code of Conduct' },
    { icon: Privacysvg, text: 'Privacy Policy' },
    { icon: Terms, text: 'Terms of Use' },
];

const OtherItems = () => {
    return (
        <nav className="secondNav">
            <h2 className="txtItems">
                Other
            </h2>
            <ul className="listNavSecond">
                {otherItems.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="c-link">
                            <span>
                                <Image
                                    className="siteLogoImg"
                                    src={item.icon}
                                    alt="Site Logo"
                                    width={50}
                                    height={40}
                                />
                            </span>
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default OtherItems;