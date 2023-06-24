import React, { useState } from 'react';
import "./App.scss";
import Star from "./assets/images/icon-star.svg"
import Tank from "./assets/images/illustration-thank-you.svg";

const App = () => {

  const [isSumbit, setIsSumbit] = useState(true)
  const [active, setActive] = useState([
    false, false, false, false, false
  ])
  const [rating, setRating] = useState(0)
  const handleSubmit = (e, i) => {
    const updatedArray = [...active]
    updatedArray[i] = !active[i]
    setActive(updatedArray)
    setRating(i + 1)
    console.log(active)
  
  };

  return (
    <>
      {
        isSumbit ? (
          <div className='submit-container' >
            <img src={Star} alt="star" />
            <h3 className='app-title'>How did we do?</h3>
            <p className='app-content'>Please let us know how we did with this survey. All feedback is appreciated to help us improve our customer support performance</p>

            <div className='rating-container'>
              {Array.from({ length: 5 }).map((_, index) => (
                <button className={`rating ${active[index] ? "active" : ""}`} key={index} onClick={(e) => handleSubmit(e,index)}>
                  {index + 1}
                </button>
              ))}
            </div>
            <button className='submit-btn' onClick={() => setIsSumbit(prev => !prev)}>Submit</button>
          </div >) : (
          <div className='tankyou-container' >
            <img src={Tank} alt="Tank YOu" />
            <div className='tankyou-content-container'>
              <p className='tankyou-content'>{`Your selected ${rating} out of 5`}</p>
            </div>
            <h2 className='tankyou-title'>Thank You !</h2>
            <p className='tankyou-content'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        )
      }
    </>
  )
}

export default App