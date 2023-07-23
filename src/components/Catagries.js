import acne from '../images/Acne.png';
import acne2 from '../images/Ance-Scar.png';
import acne3 from '../images/Bootox.png';
import acne4 from '../images/acc.png';
import acne5 from '../images/aUntitled-1.png';
import acne6 from '../images/aaa.png';
import acne7 from '../images/hairfall.png';
import acne8 from '../images/RX.png';
import acne9 from '../images/Large.png';
import acne10 from '../images/fascial.png';
import acne11 from '../images/LOSS.png';
import acne12 from '../images/Double-Chin.png';
import React from 'react';

export default function Catagries() {
  return (
<div className='catagries-box'>
    <div className='container'>
        <div className='text-col'>
            <h2 className='h2 pb-40'>Advanced Medical Aesthetics</h2>
        </div>
        <div className='row'>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Acne</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne2} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Acne Scars</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne3} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Botox Wrinkles</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne4} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Y Lift® Facial Sculpting</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne5} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>How To Look Younger & Fresher</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne6} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Brown Spots & Blemishes</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne7} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Hair Thinning & Loss</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne8} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Glacial® Rx Facials</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne9} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Large Pores</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne10} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Microneedling Facials</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne11} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Vaginal Looseness</h3>
                    </div>
                </div>
            </div>
            <div className='col-33'>
                <div className='cat'>
                    <div className='cat-img'>
                        <img src={acne12} alt=''/>
                    </div>
                    <div className='cat-txt'>
                        <h3>Double Chin</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-col mt-60'>
            <a className='btn_primary ' href='#'>BOOK OUR SERVICES NOW</a>
        </div>
    </div>
</div>

    )
}
