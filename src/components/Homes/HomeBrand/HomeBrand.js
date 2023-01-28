import React from 'react';
import airbnb from '../../../images/logos/airbnb.png'
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'

const HomeBrand = () => {
    const images = [
        { img: slack },
        { img: google },
        { img: uber },
        { img: netflix },
        { img: airbnb },
    ]

    return (
        <div className='flex flex-wrap items-center justify-around mt-[88px] lg:max-w-[970px] mx-auto'>

            {
                images.map((img, index) => <img className='w-[120px] h-9' src={img.img} key={index} alt="" />
                )
            }
        </div>
    );
};

export default HomeBrand;