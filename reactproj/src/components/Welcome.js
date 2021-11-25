import React from 'react'
// no props
// const Welcome = () => {
//     const message = <h1>Welcome Visitor</h1>;
//     return (
//         <div>
//             {message}
//         </div>
//     )
// }
const Welcome = (props) => {
    const welcomeStyle = {
        textAlign: 'center',
        fontSize: '1rem',
    }
        const message = <h1 style={welcomeStyle}>Welcome! {props.name} {props.greeting}</h1>;
        return (
            <div>
                {message}
            </div>
        )
    }

export default Welcome
