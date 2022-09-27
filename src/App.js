import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Applications = React.lazy(() => import('./pages/Applications'));
const FAQs = React.lazy(() => import('./pages/FAQs'));

function App() {

  return (
    <div>
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
