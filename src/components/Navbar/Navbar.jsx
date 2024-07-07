import Image from 'next/image';
import searchIcon from '../../images/logos_svg/search.svg';

const Navbar = () => {
    return (
        <main>
            <nav className="header">
                <div className="insideHeader ">
                    <a href="#" className="siteLogo ">
                        <Image
                            className="siteLogoImg"
                            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                            alt="Site Logo"
                            width={50}
                            height={40}
                        />
                    </a>
                    <div className="imgDev">
                        <div className="imgDev_2">
                            <div className="imgDev_3">
                                <input
                                    className="inputInside"
                                    type="search"
                                    placeholder="Search...."
                                />
                                <button
                                    type="submit"
                                    aria-label="search"
                                    className="c-Button"
                                >
                                    <Image
                                        src={searchIcon}
                                        alt="Search"
                                        width={20}
                                        height={20}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="logAccoNav">
                        <a className="aLogIn" href="#">
                            Log in
                        </a>
                        <a className="aCreaAco" href="#">
                            Create account
                        </a>
                    </div>
                </div>
            </nav>


        </main>
    );
};

export default Navbar;
