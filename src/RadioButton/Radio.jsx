import React, { useState } from 'react';
import "./radio.css";

function RadioButton() {

  const Radio=[
    {
       Name:"Coke"
    },
    {
       Name:"Ffanta"
    },
    {
       Name:"Sprite"
    },
    {
       Name:"Pepsi"
    },
  ]
  const [selectedOption, setSelectedOption] = useState('');
  const [arr, setarr] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event);
    console.log(selectedOption);
  };

  return (

    
    <div className='radio-sty'>
              <span>ADD A DRINK?</span>

              {Radio.map((Rad)=>{
                return(
                  <label htmlFor="">
                  <input type="radio"
                  
                  />
                  {Rad.Name}
                </label>
                )
              })}

      {/* <h2>Selected option: {selectedOption}</h2> */}
{/* 
      <label>
        <input
          type="radio"
          value="option1"
          // name='g'
          // checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Coke
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          // name='g'
          // checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Pepsi
      </label>
      <label>
        <input
          type="radio"
          value="option3"
          // name='g'
          // checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Fanta
      </label>
      <label>
        <input
          type="radio"
          value="option4"
          // name='g'
          // checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        Sprite
      </label> */}
    </div>
  );
}

export default RadioButton;
