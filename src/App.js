import { useEffect, useState } from 'react';
import './App.css';
import Card from "./component/Card";
function App() {
const [results, setResults] = useState([])

  useEffect(() => {
    fetchPost().then(response => setResults(response))
  }, [])

  const fetchPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
    console.log(response)
    return response
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1> Side Hustle</h1>
        <p> talk to Me </p>
        <Card results={results} />
      </header>
    </div>
  );
}

export default App;
