import { Route, Routes } from 'react-router-dom'
import './App.css'
import AadharForm from './Components/Form/AadharForm'
import AadharTable from './Components/Table/AadharTable'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/AadharForm" element={<AadharForm />}/>
        <Route path="/AadharForm/:id" element={<AadharForm />}/>
        <Route path="/AadharTable" element={<AadharTable />}/>
        
      </Routes>      
    </>
  )
}

export default App
