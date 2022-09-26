import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Applications = React.lazy(() => import('./pages/Applications'));

function App() {

  return (
    <div>
      <Navbar />
      <Suspense>
        <div className='content-area'>  
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
