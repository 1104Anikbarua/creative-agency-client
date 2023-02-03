import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Homes/Home/Home';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import ServiceList from './components/DashBoard/ServiceList/ServiceList';
import DashBoard from './components/DashBoard/DashBoard';
import RequireAuth from './components/Auth/RequireAuth/RequireAuth';
// import Header from './components/Shared/Header/Header';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import Order from './components/DashBoard/Order/Order';
import Review from './components/DashBoard/Review/Review';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentPage from './components/DashBoard/PaymentPage/PaymentPage';

function App() {
  return (
    <div className='lg:max-w-[1440px] mx-auto relative'>
      {/* <Header></Header> */}
      <Routes>

        <Route path='/' element={
          // <RequireAuth>
          // </RequireAuth>
          <Home></Home>
        }></Route>
        <Route path='/home' element={
          // <RequireAuth>
          // </RequireAuth>
          <Home></Home>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<ServiceList></ServiceList>}></Route>

          <Route path='addservice' element={<AddService></AddService>}></Route>

          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>

          <Route path='order/:orderId' element={<Order></Order>}></Route>

          <Route path='review' element={<Review></Review>}></Route>

          <Route path=':productId' element={<PaymentPage></PaymentPage>}></Route>
        </Route>

        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer position='top-center'
        theme='light'
      ></ToastContainer>
    </div>
  );
}

export default App;
