import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './components/Pages/Dashboard/AddReview';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import MyOrders from './components/Pages/Dashboard/MyOrders';
import Blogs from './components/Pages/Home/Blogs';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Login/Register';
import RequireAuth from './components/Pages/Login/RequireAuth';
import MyPortfolio from './components/Pages/MyPortfolio/MyPortfolio';
import NotFound from './components/Pages/NotFound/NotFound';
import Purchase from './components/Pages/Purchase/Purchase';
import Navbar from './components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={

          <Purchase></Purchase>

        }></Route>

        <Route path='/blogs' element={
          <RequireAuth>
            <Blogs></Blogs>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
        </Route>

        <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
