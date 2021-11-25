import React from 'react'
import './Footer.css'
const Footer = () => {
    const name='Ronald';
    //sample of embedded css
    // const footerStyle = {
    //     color: 'blue',
    //     padding: '5px',
    //     backgroundColor: 'yellow',
    //     textAlign: 'center',
    // }
    //inline csss{backgroundColor: 'blue', color:'white', textAlign:'center'}
    return (
        <footer>
            <p > 
                Designed and Created by {name}
            </p>
            <p className="addfooter">
                    Copyright  2020
            </p>
            {/* <h1>Designed and Created by {name}</h1> */}
        </footer>   
        
    )
}

export default Footer
