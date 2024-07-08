import React from 'react';
import Image from 'next/image';

import FacebookIcon from '../../images/logos_svg/facebook.svg';
import GithubIcon from '../../images/logos_svg/github.svg';
import InstagramIcon from '../../images/logos_svg/instagram.svg';
import MastodonIcon from '../../images/logos_svg/mastodon.svg';
import TwitchIcon from '../../images/logos_svg/twitch.svg';
import TwitterIcon from '../../images/logos_svg/twitter.svg';

const buttons = [
  { id: 'twitter', name: 'Sign up with Twitter', icon: TwitterIcon },
  { id: 'facebook', name: 'Sign up with Facebook', icon: FacebookIcon },
  { id: 'github', name: 'Sign up with Github', icon: GithubIcon },
  { id: 'instagram', name: 'Sign up with Instagram', icon: InstagramIcon },
  { id: 'twitch', name: 'Sign up with Twitch', icon: TwitchIcon },
  { id: 'mastodon', name: 'Sign up with Mastodon', icon: MastodonIcon },
];

const SignInButtons = () => {
  return (
    <form className="w-full flex flex-col space-y-4 gap-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="flex items-center mt-4 p-3 w-full rounded-md bg-white border border-gray-300 hover:bg-gray-100 transition"
        >
          <div className="relative w-6 h-6 mr-3">
            <Image
              src={button.icon}
              alt={button.name}
              width={24}
              height={24} 
              objectFit="contain"
            />
          </div>
          <span className="font-bold  text-lg text-black flex-1 text-center">
            {button.name}
          </span>
        </button>
      ))}
    </form>
  );
}

export default SignInButtons;
