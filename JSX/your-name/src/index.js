import React from 'react'
import ReactDOM from 'react-dom/client'
const price = 2000;
const tax = price * 0.1;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>Car Price: {price + tax}</div>);