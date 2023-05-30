import React from 'react';
import './Chatbot.css';
import { Link } from 'react-router-dom';
import './App.css'

const Chatbot = () => {
    return (
        <div id = 'chatbot' className='page'>
            <div id="backdrop">
                <div id="welcomelogo">
                    --------||Paathshala||--------
                </div>
                <div id="box1">
                    <div id="box2">
                        <div id="form"></div>
                        <div id="menu">
                            <p>Select Language</p>
                            <div id="menu1">
                                <label for="Lang">
                                    <select name="pLang" id="Lang">
                                        <option value="Eng">English</option>
                                        <option value="Hindi">हिंदी</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div id="button">
                            <Link to='/menu_eng' id="menu">Skip to main page</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Chatbot