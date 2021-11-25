import React from 'react'
import Welcome from './Welcome';

const Main = () => {
    const message = <h1>This is my first React Js</h1>; //declare variable before return, call the variable inside using curly braces, {message}
    const message2 = <div style={{color:'darkcyan', boxShadow: '10px 10px 10px 10px red', margin: '40px'}}><h1>HELLO EVERYONE</h1> <h2>The time now is: {new Date().toLocaleTimeString()}</h2></div> //combination of html tag, dateobject, method tolocaleTimeString
    //personnel object with 3 properties
    const personnel  = {
        firstName: 'Ronald',
        lastName: 'Velarde',
        age: 24,
    }

    //array of object
    const personnel2 = [
        {
            firstName: 'Ronald',
            lastName: 'Velarde',
            age: 24,
        },
        {
            firstName: 'Matha',
            lastName: 'stuart',
            age: 23,
        },
        {
            firstName: 'JAmes',
            lastName: 'Lord',
            age: 21,
        },
        {
            firstName: 'Adamson',
            lastName: 'Steins',
            age: 24,
        },
        {
            firstName: 'Alebert',
            lastName: 'Einstein',
            age: 37,
        },
    ]
        // const nameArr =[];
        // for(let i =0 ;i< personnel2.length ; i++){
        //     nameArr[i] = personnel2[i].firstName +' '+ personnel2[i].lastName +' ' +personnel2[i].age +' ';
        // }

    // function names (objname) {
    //     return [objname.firstName+' ' + objname.lastName +' '+objname.age +' ' ]
    // }


    const numArr = [1,2,3,4,5,6,7];
    //const newArr = numArr.map(num => num+10);
    /*for (let i=0; i<numArr.length; i++){
        numArr[i]*=10;
    } another way to multiplay*/
    return (
        <div>
            <header className="App-header">
                <Welcome name ="Ronald" greeting="Have a Happy Day!"/>
                <Welcome name ="Jane" greeting="Have a Happy Day!"/>
                <Welcome name ="Anna" greeting="Have a Happy Day!"/>
                {message}{message2}
                My name is {personnel.firstName} and I am {personnel.lastName} {personnel.age}
               

                {/* {'Hello there my name is '+personnel.firstName +" " +personnel.lastName +' I am '+personnel.aGe} -one method to call*/}
                    {/* using ctrl+ kc to comment, revert ctrl+ku
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a> */} 
                    <br/>
                    
                    Samples of Array: {numArr.join(',')}; <br/>
                    Samples of Array times 10: { numArr.map(num => num*10).join(',')};<br/>
                    {/* sample of object array: {nameArr.join('')}  another way to multiply*/}
                    {/* sample of array object: {personnel2.map(names)} */}
                    
                    
                    Sample of Array Block: <br/> {personnel2.map((person, i) => <p> {i+1} {person.firstName} {person.lastName} {person.age} </p>)}

            </header>
        </div>
    )
}

export default Main
