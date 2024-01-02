import LeftBar from './Components/LeftSideBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className='app-inner-container'>
      <LeftBar />
      <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
