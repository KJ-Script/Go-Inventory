import FormUi from './components/form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from './components/Nav';
import Product from './pages/Product';
import Temprature from './pages/Temprature';
import Admins from './pages/Admins';
import Quotations from './pages/Quotations';
import Customers from './pages/Customers';
import Store from './pages/Store';

function App() {
  return (
    <div className="min-h-screen font-outfit bg-slate-800 ">
    <Router>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<FormUi />} />
        <Route exact path="/temprature" element={<Temprature/>} />
        {/* <Route exact path="/storage" element={<Storage/>} /> */}
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/user" element={<Customers />} />
        <Route exact path="/admins" element={<Admins />} />
        <Route exact path="/quotations" element={<Quotations />} />
        <Route exact path="/store" element={<Store />} />


      </Routes>
    </Router>
  </div>
  );
}

export default App;
