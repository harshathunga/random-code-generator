import { useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [quote, setquote] = useState([]);
  const colref = useRef();
  let color = ["blue", "red", "yellow", "light green","black"]
  const getqts = () => {
    const url = "https://type.fit/api/quotes";
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => setquote(res[Math.floor(Math.random() * res.length - 1)]));
  };

  useEffect(() => {
    getqts();
  },[]);

  useEffect(() => {
    colref.current.style.color= color[Math.floor(Math.random() * color.length-1)]
  },[quote]);

  return (
    <div className="App">
      <div  className="main">
        <h6>random code generator with react </h6>
        <p  ref={colref}>{quote && quote.text}</p>
        <p className="auther">- {quote.author}</p>
        <button className="next" onClick={() => getqts()}>
          get qoutes
        </button>
      </div>
    </div>
  );
}

export default App;
