import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client';
import { AiOutlineHeart} from 'react-icons/ai'



const style = {
likesContainer: 'flex items-center justify-end  space-x-2',
 heartIcon: 'h-3 w-3 text-gray-500 dark:text-gray-400',
 likesCounter: 'text-xs text-gray-500 dark:text-gray-400'

}

const Product = (  { product: { image, name , slug , price} }) => {
  return (
    <div>

<div>


  <Link href={`/product/${slug.current}`}> 
  <div className='product-card'>
<img   
src={urlFor(image && image[0])}
width={150}
className="product-image"
/>
<p className='product-name'>{name}</p>
<p className='product-price'>{price}</p>
</div>
</Link>

  <div className={style.likesContainer}>
    <AiOutlineHeart  className={style.heartIcon}/>
    <div className={style.likeCounter}>
      { image?.stats?.favorites ?? 0}

    </div>
  
  </div>
</div>


    </div>
  )
}

export default Product