import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing"
import ContactMe from "./ContactMe"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/contactMe' element={<ContactMe/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
