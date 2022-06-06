import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Text from "./components/Text";
function App() {
  const [text , setText] = useState("");
  const [para, setPara] = useState(1);
  const [html, setHtml] = useState("no");
  const textHandler = (data, para, html) => {
    setPara(para);
    setText(data)
    setHtml(html)

  }


  return (
    <div className="App">
 <div className='App-header '>
   Text Generator
 </div>
          <Form textHandler={textHandler}/>
          <Text para={para} text={text} html={html}/>

    </div>
  );
}

export default App;
