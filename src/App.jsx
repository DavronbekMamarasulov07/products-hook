import { Navigate, Route, Routes } from 'react-router-dom'
import SingleProduct from './routes/single_product/SingleProduct'
import Home from './routes/home/Home'
import NotFound from "./routes/not-found/NotFound"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/single-product/:productId" element={<SingleProduct />}/>
        <Route path='not-found' element={<NotFound/>} />
        <Route path='*' element={<Navigate to='/not-found'/>} />
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
