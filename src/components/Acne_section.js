import img from '../images/How-Image.png';
import React from 'react'

export default function Acne_section() {
  return (

    <div className='acne-box'>
      <div className='container'>
        <div className='row'>
          <div className='col-50'>
            <h2 className='h3'>How Does Acne Form?</h2>
            <p>
            Acne starts with oily skin. The oil or sebum comes from the sebaceous glands that are attached to the hair follicles in the face, neck and scalp. When the amount of sebum is normal, the skin is soft and the hair is strong. Not enough sebum leads to dry, flaky skin (like patches of eczema); too much sebum leads to acne.
<br/><br/>
When sebum is combined with dead skin cells, your pores get clogged and plugged up, and acne bacteria called Cutibacterium acnes gets trapped underneath. This can lead to an acne infection. Outside the skin, C. acnes is a friendly bacteria, but inside the skin, it is an enemy and our body will try to get rid of it. The body attempts to get rid of it by sending antibodies to the infected area. After a few days, the build up of bacteria, dead cells, and antibodies result in red, painful bumps – a.k.a pimples. If you don’t touch these bumps, they burst on their own. If you pick at them, you introduce more trauma, damaging the skin. Either way, the normal skin is destroyed and gone forever and replaced with scars.
            </p>
          </div>
          <div className='col-50'>
            <img src={img} alt=''/>
          </div>
        </div>
      </div>
    </div>

    )
}
