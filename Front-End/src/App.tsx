import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './components/SearchPage';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ListDetails from './components/listingdetails';
import MyAccount from './components/Myaccount';
import BookingPage from './components/BookingPage';
import ProfileForm from './components/Profile';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>   
          <Route path="/search" element={<SearchPage />} />  
          <Route path="/" element={<Home />} />         
          <Route path="/login" element={<LoginForm />} />         
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/listingdetails" element={<ListDetails/>} />
          <Route path="/myaccount" element={<MyAccount/>} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/profile" element={<ProfileForm/>} />
        </Routes>
        <Footer />
      </Router>  
    </div>
  );
};

export default App;
