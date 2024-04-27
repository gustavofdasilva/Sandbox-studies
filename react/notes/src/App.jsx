import { useState } from 'react'
import './App.css'
import Draggable from "react-draggable"

function App() {

  const [notes, setNotes] = useState([1,2,3])

  const createNote = () => {
    setNotes([...notes,1])
    console.log(notes)
  }

  const onFocus = () => {
    this.setState({
      backgroundColor:"#00ff00"
    })
  }

  return (
  
    <>
      <h1>Place notes!</h1>
      <button onClick={createNote}>Create Note</button>
      {notes.map(element => {
        return(
          <Draggable key={element}>
          <div style={{
            backgroundColor:this.state.backgroundColor,
            color:"#000",
            padding:10,
            borderRadius:2,
            position: "absolute"
          }} onFocus={()=>{this.onFocus()}}>
            <p>HEY!</p>
            <p>Note</p>
            <button>
              Hey
            </button>
          </div>
        </Draggable>
        )
      })}
    </>
  )
}

export default App
