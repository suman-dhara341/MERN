import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from './components/Service'
import Login from './components/Login'
import Signup from './components/Signup'
import NoPage from "./components/NoPage";
import LogOut from "./components/LogOut";
import AdminDashboard from "./components/admin/AdminDashboard";
import EditUserForm from "./components/admin/EditUserForm.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path='/admin/edit/:id' element={<EditUserForm />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
