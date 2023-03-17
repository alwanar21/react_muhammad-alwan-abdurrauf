import './App.css'
import CreateProduct from './pages/CreateProduct'
import LandingPage from './pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './layouts/RootLayout';
import Product from './pages/Product';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="createProduct" element={<CreateProduct />} />
      <Route path="createProduct/product/:productId" element={<Product />} />
    </Route>
  )
);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
