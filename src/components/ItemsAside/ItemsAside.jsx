import React from 'react'
import CardSignIn from '../CardSignIn/CardSignIn'
import ItemsTags from '../ItemsTags/ItemsTags'
import OtherItems from '../OtherItems/OtherItems'
import PopularTags from '../PopularTags/PopularTags'
import SocialMedia from '../SocialMedia/SocialMedia'
import CardDevTo from '../CardDevTo/CardDevTo'
import Footer from '../Footer/Footer'

const ItemsAside = () => {
    return (
        <div className="aside">
            <CardSignIn />
            <nav className="block mt-4 mb-4">
                <div className="flex justify-start mb-4">
                    <ItemsTags />
                </div>
                <div className="flex justify-start mb-4">
                    <OtherItems />
                </div>
                <nav className="mb-6">
                    <h3 className="txtItems">
                        Popular Tags
                    </h3>
                    <div className="conteinerScroll h-48 overflow-y-auto">
                        <PopularTags />
                    </div>
                    <SocialMedia />
                </nav>
            </nav>
            <CardDevTo />
            <Footer />
        </div>
    )
}

export default ItemsAside