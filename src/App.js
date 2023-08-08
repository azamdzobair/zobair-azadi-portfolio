import logo from './logo.svg';
import './App.css';
import Navbar from './commonent/Navbar/Navbar';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar></Navbar>
      </div>
    </div >
  );
}

export default App;
