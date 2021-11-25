import React from 'react'
//always use the props inside the component to declare it Bulletinboard = (props)
const Bulletinboard = (props) => {
//ternary conditionals if props is true? display props if not then null {props.category?<h3>Category: {props.category} </h3>:null}
//using logical (uppersand) && conditionals if false it will be ignored or empty {props.category&&<h3>Category: {props.category} </h3>}
//using the style css <h3 style={{display: !props.category && 'none'}}>Post: {props.post}</h3>
    return (
        <div style={{textAlign:'center', backgroundColor:'palegreen'}}>
            <h3 > ID{props.id}. <span style={{display:  !props.category &&  'none'}}>Category: {props.category} </span></h3>
            <h3 style={{display: !props.post && 'none'}}>Post: {props.post}</h3>
            {/* <h3>{props.id}</h3> */}
            
        </div>
    )
}

export default Bulletinboard
