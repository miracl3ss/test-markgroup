// import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);

const URL = 'http://api.weatherapi.com/v1/current.json?key=c4a93a26f95f45beb4d04824243008';

function App() {
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
         const data = await fetch(URL);
         const {current, location} = await data.json();
     
         setTemp(current.temp_f)
        }
      
        fetchData();
      }, []);

    return (
        <p className="App">
            London Temp Now: {temp}F
        </p>
    );
}



export default App;