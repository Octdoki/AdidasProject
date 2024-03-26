import {  BrowserRouter,  Routes,  Route,  Link  } from "react-router-dom";

import CustomerAdd from "./components/customer/CustomerAdd";


import CustomerDetail from "./components/customer/CustomerDetail";
import CustomerEdit from "./components/customer/CustomerEdit";
import Layout from "./components/Layout";
import NoticeDetail from "./components/notice/NoticeDetail";
import About from "./pages/about/About";
import Customer from "./pages/customer/Customer";
import Join from "./pages/login/Join";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Main from "./pages/main/Main";
import Notfiles from "./pages/notfile/Notfiles";
import Notice from "./pages/notice/Notice";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import GlobalStyle from "./styled/GlobalStyle"
 

const App = () => {
  return (
    <>
    <BrowserRouter>
        <GlobalStyle /> 
        <Routes>
          <Route path="/" element={<Layout/> }>
            <Route index element={<Main />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/notice">
              <Route index element={<Notice />} />
              <Route path=":noticeID" element={<NoticeDetail />} />
            </Route>
            <Route path="/customer"  >
              <Route index  element={<Customer />} />
              <Route path=":customerID" element={<CustomerDetail/>} />
              <Route path="customeradd" element={<CustomerAdd/>} />
              <Route path="customeredit" element={<CustomerEdit/>} />
            </Route>
          </Route>
          <Route path="*" element={<Notfiles />} />
        </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;