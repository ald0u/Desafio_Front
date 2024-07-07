import Image from 'next/image';
import React from 'react';

import FacebookIcon from '../../images/logos_svg/facebook.svg';
import GithubIcon from '../../images/logos_svg/github.svg';
import InstagramIcon from '../../images/logos_svg/instagram.svg';
import MastodonIcon from '../../images/logos_svg/mastodon.svg';
import TwitchIcon from '../../images/logos_svg/twitch.svg';
import TwitterIcon from '../../images/logos_svg/twitter.svg';

const socialMediaItems = [
    { icon: TwitterIcon },
    { icon: FacebookIcon },
    { icon: GithubIcon },
    { icon: InstagramIcon },
    { icon: TwitchIcon },
    { icon: MastodonIcon },
];

const SocialMedia = () => {
    return (
        <div className="containerAsideSocialMedia">
            {socialMediaItems.map((item, index) => (
                <a key={index} href="#" className="clink">
                    <Image
                        src={item.icon}
                        alt="Social Media Icon"
                        width={50}
                        height={40}
                    />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia