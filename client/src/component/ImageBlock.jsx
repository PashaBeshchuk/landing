import React from "react"
import Image from '../image/comp.jpg'
const ImageBlock = (props)=> {
    return <div style={{backgroundImage: `url(${Image})`}} className="img-responsi img">
        <div className="head">
            <p>TEST ASSIGNMENT</p>
            <p>FOR FRONTEND</p>
            <p>DEVELOPER POSITION</p>
        </div>
        <div className="text">
            Meet my family. There are five of us – my parents, my elder brother, my baby sister and me. 
            First, meet my mum and dad, Jane and Michael. 
             
            <div>
                <button className="btn btn-danger sign-button">Sing up now</button>
            </div>
        </div>
        
    </div>
}

export default ImageBlock