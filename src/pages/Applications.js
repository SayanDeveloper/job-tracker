import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Dashboard.css";
import { data } from '../dummyData/dummyApplicationData';
import TableMapping from '../components/TableMapping';

const Applications = ({setProgress}) => {

    useEffect(() => {
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, [])
    
    return (
        <>
            <h1 className='center-text'>All Applications</h1>
            <div className='center-text mb-4'>Here you can see your all job applications</div>
            <TableMapping tableBody={data} />
            <div className='mt-4'></div>
        </>
    )
}

export default Applications
