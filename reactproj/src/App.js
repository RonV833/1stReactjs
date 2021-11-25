//import logo from './logo.svg'; //logo imported
import './App.css'; //./ same folder, ../ different folder
import Header from './components/Header'; //importing the new component, <Header/> to call the component inside the return
import Footer from './components/Footer';
import Main from './components/Main';
//import Welcome from './components/Welcome'; move to main
import Bulletinboard from './components/Bulletinboard';
import Boarddata from './components/Boarddata';

function App() { //App, capital for functionname and filename and componentname
  let boardComponents = Boarddata.map(boardData => <Bulletinboard id = {boardData.id} category = {boardData.category} post = {boardData.post}/>)
  return (
    //div is the single parent tag only, <></> empty tags or fragments
    
    <>
      <Header/> 
      {/* <Bulletinboard category="Current Events" post="Our Current Event for the day"/>
      <Bulletinboard category="Announcement" post="We have an announcement"/>
      <Bulletinboard category="Quotes of the day" post="No pain no gain"/>
      <Bulletinboard   post="We will keep you posted"/> */}
      {boardComponents}

      <Main/>
      
      <Footer/>
    </>
  );
}

export default App;
//for new component need export default App;
