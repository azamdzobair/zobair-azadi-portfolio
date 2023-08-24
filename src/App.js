import logo from './logo.svg';
import './App.css';
import Navbar from './commonent/Navbar/Navbar';


import Features from './commonent/Features/Features';
import Home from './commonent/Home/Home';
import Project from './commonent/Project/Project';

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar></Navbar>
        <Home></Home>
        <Features></Features>
        <Project></Project>


      </div>
    </div >
  );
}

export default App;
