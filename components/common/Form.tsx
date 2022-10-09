import React from 'react';

const Form = () => {
  return (
    <div>
       <form id="contact" method="post">
                <h4>Leave A Message</h4>
                <div className="info flex-container">
                    <input type="text" name="vardas" placeholder="Name" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                </div>
                <br/>
                <br/>
                <div className="msg flex-container">
                    <textarea placeholder="Your message" name="message" required></textarea>
                    <button name="submit" type="submit" id="contact-submit">Submit</button>
                </div>
        </form> 
    </div>
  );
};

export default Form;