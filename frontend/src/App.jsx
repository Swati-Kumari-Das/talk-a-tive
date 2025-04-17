import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Button, HStack } from "@chakra-ui/react"
import './App.css'
import Homepage from './Pages/Homepage'
import ChatPage from './Pages/ChatPage'

function App() {
 

  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} exact/>
        <Route path="/chats" element={<ChatPage />} />

      </Routes>
      
      
   
      {/* <Button>Click me</Button> */}

    </BrowserRouter>
    
    </div>
  )
}

export default App
