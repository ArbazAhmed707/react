import banner from '../images/banner.png';
import React from 'react'

export default function Banner() {
    return (
        <div className='banner-box'>
            <img src={banner} alt="Bnnaer" />
            <div className='container'>
                <div className='row'>
                    <div className='banner-text'>
                        <h1>
                            Looking
                            Beautiful and
                            Younger
                        </h1>
                        <p>You deserve it<br />
                            <b>Naturally.!</b></p>
                        <a href=''>Read More</a>
                    </div>
                </div>
            </div>
        </div>


    )
}
