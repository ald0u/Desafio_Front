import Image from 'next/image'
import React from 'react'

import About from '../../images/logos_svg/about.svg';
import Advertise from '../../images/logos_svg/advertise.svg';
import Contact from '../../images/logos_svg/contact.svg';
import Faq from '../../images/logos_svg/FAQ.svg';
import ForemShop from '../../images/logos_svg/forem-Shop.svg';
import Guides from '../../images/logos_svg/guides.svg';
import home from '../../images/logos_svg/home.svg';
import postCast from '../../images/logos_svg/potcast.svg';
import readingList from '../../images/logos_svg/reading-list.svg';
import SoftwareComparisons from '../../images/logos_svg/software-comparisons.svg';
import Tags from '../../images/logos_svg/tags.svg';
import Videos from '../../images/logos_svg/videos.svg';


const menuItems = [
    { icon: home, text: 'Home' },
    { icon: readingList, text: 'Reading List' },
    { icon: postCast, text: 'Podcasts' },
    { icon: Videos, text: 'Videos' },
    { icon: Tags, text: 'Tags' },
    { icon: Faq, text: 'FAQ' },
    { icon: ForemShop, text: 'Forem Shop' },
    { icon: Advertise, text: 'Advertise on DEV' },
    { icon: About, text: 'About' },
    { icon: Contact, text: 'Contact' },
    { icon: Guides, text: 'Guides' },
    { icon: SoftwareComparisons, text: 'Software Comparisons' },
];

const ItemsTags = () => {
    return (
        <>
            <nav className="secondNav">
                <ul className="listNavSecond">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="c-link">
                                <span className="icon">
                                    <Image
                                        src={item.icon}
                                        alt={item.text}
                                        width={24}
                                        height={24}
                                    />
                                </span>
                                <span className="linkText">{item.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </>
    )
}

export default ItemsTags;