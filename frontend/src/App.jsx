import { useState } from 'react'
import './App.css'
import { SaveArchive } from './components/saveArchive/SaveArchive'
import { TableArchive } from './components/tableArchive/TableArchive'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SaveArchive />
      <TableArchive />
    </>
  )
}

export default App
