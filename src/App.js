import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import LandingPage from './landing_page/landing_page';
import Stroganomics from './stroganomics/stroganomics';
import StroganoffAi from './stroganoff_ai/stroganoff_ai';
import Gallery from './gallery/gallery'
import StroganoffConfessions from './confessions/confessions';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stroganomics" element={<Stroganomics />} />
          <Route path="/stroganoffai" element={<StroganoffAi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/confessions" element={<StroganoffConfessions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
