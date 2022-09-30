import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import LoadingBar from "react-top-loading-bar";
import Navbar from './components/Navbar';
import './App.css';
import "./styles/Common.css"

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Applications = React.lazy(() => import('./pages/Applications'));
const FAQs = React.lazy(() => import('./pages/FAQs'));

function App() {

  const { pathname } = useLocation();
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    setProgress(20);
  }, [pathname])

  return (
    <div>
      <LoadingBar
        color='#FD841F'
        progress={progress}
        waitingTime={400}
      />
      <Navbar />
      <Suspense>
        <div className='content-area'>  
          <Routes>
            <Route exact path="/" element={<Dashboard setProgress={setProgress} />} />
            <Route path="/applications" element={<Applications setProgress={setProgress} />} />
            <Route path="/faq" element={<FAQs setProgress={setProgress} />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
