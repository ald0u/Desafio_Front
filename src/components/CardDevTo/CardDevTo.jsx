import Image from 'next/image'
import React from 'react'

const CardDevTo = () => {
    return (
        <div className="cardContainer">
            <div className="cardHeader">
                <span className="cardTitle">DEV Community</span>
                <span className="cardMenu">...</span>
            </div>
            <div className="cardImageContainer">
                <Image
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--GkDXbK0b--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oky7tpxe4z0f8ksng5ta.png"
                    alt="Dark mode promotion"
                    width={350}
                    height={350}
                    className="cardImage"
                />
            </div>
        </div>
    )
}

export default CardDevTo;