import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import CreateProduct from './pages/CreateProduct'
import EditProduct from './pages/EditProduct';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';
import StoreManagement from './pages/StoreManagement';
import EditSingleProduct from './pages/EditSingleProduct';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/product" element={<CreateProduct />} />
        <Route path="/storeManagement" element={<StoreManagement />} />
        <Route path="/editSingleProduct/:productId" element={<EditSingleProduct />} />
        <Route path="/editProduct/:productId" element={<EditProduct />} />
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );


  return (
    <RouterProvider router={router} />
  )
}

export default App
