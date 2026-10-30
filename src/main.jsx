import React from 'react'
import { createRoot } from "react-dom/client";
import '../src/styles/globals.css'
import App from './App'
const Main = () => {
  return (
<div>
    <App />
</div>


  )
}
const root=createRoot(document.getElementById("root"))
root.render(<Main/>)
