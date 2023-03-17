import './App.css'
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Swal from 'sweetalert2'

function App() {

  useEffect(() => {
    Swal.fire(
      'Welcome!!',
    )
  }, [])


  return (
    <div className="App">
      <Navbar />
      <CreateProduct />
    </div>
  )
}

export default App
