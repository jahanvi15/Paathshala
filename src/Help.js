import React from 'react';
import './App.css';
import './Help.css';

const Help = () => {
  return (
    <div className='page1'>
        <div className='container'>
            <h2>If you have any questions, contact us:</h2>
            <div id="form-section">
                {/* <form onSubmit={sendEmail}> */}
                <form>
                  <label for="email">Enter your email:</label><br/>
                  <input type="text" id="email" name="email"/><br/>

                  <label for="feedback">Your Message:</label><br/>
                  <textarea type="text" id="feedback" name="message"></textarea><br/>

                  <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
 
export default Help