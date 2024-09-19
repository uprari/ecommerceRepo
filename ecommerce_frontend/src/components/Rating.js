import React from 'react'

function Rating({color,value,text}) {
  return (
    <div className='rating'>
      <span>
        <i className={value>=1?
            'fa-solid fa-star': value>=0.5?'fa-solid fa-star-half-stroke':''
        } style={{color: "#FFD43B",}}></i>
      </span>
      <span>
        <i className={value>=2?
            'fa-solid fa-star': value>=1.5?'fa-solid fa-star-half-stroke':''
        } style={{color: "#FFD43B",}}></i>
      </span>
      <span>
        <i className={value>=3?
            'fa-solid fa-star': value>=2.5?'fa-solid fa-star-half-stroke':''
        } style={{color: "#FFD43B",}}></i>
      </span>
      <span>
        <i style={{color: "#FFD43B",}} className={value>=4?
            'fa-solid fa-star': value>=3.5?'fa-solid fa-star-half-stroke':''
        }></i>
      </span>
      <span>
        <i style={{color: "#FFD43B",}} className={value>=5?
            'fa-solid fa-star':value>=4.5?'fa-solid fa-star-half-stroke':''
        } ></i>
      </span>
      <span>{text && text}</span>
    </div>
  )
}

export default Rating
