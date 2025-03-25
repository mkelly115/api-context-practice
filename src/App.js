import MessageContext from './context/MessageContext';
import { useContext } from 'react';
import './App.css';

 export default function App() {

  const message = "Hello World"

  return (
  <div>
    <MessageContext.Provider value={message}>
      <ComponentA />
    </MessageContext.Provider>
  </div>
  )
}

function ComponentA(){
  return(
    <ComponentB></ComponentB>
  )
}

function ComponentB(){
const message = useContext(MessageContext)

  return(
    <div>
      Message: {message}
    </div>
  )
}