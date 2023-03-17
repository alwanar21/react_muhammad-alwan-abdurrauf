import './App.css'
import Navbar from './components/Navbar'
import CreateProduct from './pages/CreateProduct'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <CreateProduct />
    </div>
  )
}

export default App
