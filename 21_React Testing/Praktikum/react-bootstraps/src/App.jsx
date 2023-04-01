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

//layout
import RootLayout from './layouts/RootLayout';
import UserFormLayout from './layouts/UserFormLayout';

//pages
import Product from './pages/Product';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="createProduct" element={<CreateProduct />} />
      {/* <Route path="createProduct/product/:productId" element={<Product />} /> */}
      <Route path="/user" element={<UserFormLayout />} >
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Route>
  )
);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
