import gori from '../images/ld1.png';
import chini from '../images/ld2.png';
import russian from '../images/ld3.png';


import React from 'react'

export default function Gallery() {
  return (
<div className='gallery-box'>
    <div className='container'>
    <div className='text-col'>
            <h2 className='h2'>Cynthia M Lopez, M.D.</h2>
            <p>One of the Leaders in Acne and Acne Scar Treatments.</p>
            <p className='sm-text'>Dr. Cynthia Lopez is a board-certified medical doctor by the American Board of Laser Surgery -- the only medical specialty board in the world devoted to laser 
medicine. Her devotion to patient care and top-notch expertise have earned her a reputation as one of California’s top doctors specializing in non-invasive
surgery. Dr. Lopez’s specialties include treatment of sexual and bladder symptoms related to after birth and aging, Y Lift (a non-surgical face lift), treatment
of severe acne and acne scarring, and body contouring.</p>
            </div>
        <div className='row'>
        <div className='image-gallery'>
            <div className='col-25'>
                <div className='gallery-img'>
                    <img src={gori} alt/>
                </div>
            </div>
            <div className='col-50'>
            <div className='gallery-img'>
                    <img src={chini} alt/>
                </div>
            </div>
            <div className='col-25'>
            <div className='gallery-img'>
                    <img src={russian} alt/>
                </div>
            </div>
            </div>
        </div>
    </div>
</div> 
 )
}
