import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router';
import LoadingBar from "react-top-loading-bar";
import Navbar from './components/Navbar';
import './App.css';
import "./styles/Common.css"

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Applications = React.lazy(() => import('./pages/Applications'));
const FAQs = React.lazy(() => import('./pages/FAQs'));

function App() {

  const [progress, setProgress] = useState(10);

  return (
    <div>
      <LoadingBar
        color='#2c7aff'
        progress={progress}
        waitingTime={50}
      />
      <Navbar />
      <Suspense>
        <div className='content-area'>  
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/faq" element={<FAQs />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
