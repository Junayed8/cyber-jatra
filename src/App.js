import './App.css';
import Home from './Pages/Home/Home';
import PortfolioDetails from './Pages/PortfolioDetails/PortfolioDetails';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Footer from './Pages/Shared/Footer/Footer';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Review from './Pages/Review/Review';
import Career from './Pages/Career/Career';
function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/service' element={<Service></Service>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/career' element={<Career></Career>}></Route>
      <Route path='/portfolio' element={<PortfolioDetails></PortfolioDetails>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/team' element={<Team></Team>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
