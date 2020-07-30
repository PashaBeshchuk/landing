import React from "react"
import './Header.css'
import Propg from '../image/prog.jpg'
const OurAdvantages = (props)=> {
    return <div className='body-advantages'>
            
            <h1 className="advantage-h1">Lets`s get acquainted</h1>
            
            <div className="advantage-content">
                <div className="advantage-content__img">
                    <div>
                        <img className="advantage-content__img " src={Propg}/>
                    </div>
                </div>
                <div className="advantage-content__text">
                    <h3>I am cool frontend developer</h3>
                    <p>
                        My mother is very kind and understanding. We are real friends. She is a housewife. 
                        As she has three children, she is always busy around the house. 
                        She takes care of my baby sister Meg, who is only three months old. 
                        My sister is very small and funny. She sleeps, eats and sometimes cries. 
                        We all help our mother and let her have a rest in the evening. 
                        Then she usually reads a book or just watches TV. My father is a doctor.
                    </p>
                    <p>
                        My name is Jessica. I am eleven. I have long dark hair and brown eyes. 
                        I am not as clever as my brother, though I try to do my best at school too. I am fond of dancing. 
                        Our dancing studio won The Best Dancing Studio 2015 competition last month.
                    </p>
                    <div>Sing up now</div>
                </div>
            </div>
    </div>
}

export default OurAdvantages