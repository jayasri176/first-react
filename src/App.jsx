import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Protfolio from './pages/protfolio';
import ContactUs from './pages/contactUs';
import AboutUs from './pages/aboutUs';
function App() {
  return ( //nesting component
    <Layout>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about-us" element={<AboutUs/>} />
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path="/protfolio" element={<Protfolio/>} />
          </Routes>
       </BrowserRouter>
    </Layout>
  );
}

export default App;
