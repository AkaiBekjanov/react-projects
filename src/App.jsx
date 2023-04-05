// hooks
import { useState } from 'react'
// styles
import './App.css'
// components

import { Input } from './components/Input.jsx'
import { Notes } from './components/Notes'



const Container =(props)=>{
  return (<div styles={{
    maxWidth:"1200px",
    margin:"0 auto"
  }}>{props.children}</div>)
}




function App() {


  return (
    <div className="App">
        <Container>
           <h1>Notes</h1>
           <br />
           <Input />
           <br />
           <br />
           <Notes />
        </Container>
    </div>
  )
}

export default App
