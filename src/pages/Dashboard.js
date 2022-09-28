import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import newJobImg from "../assets/newJob.png";
import contactImg from "../assets/contact.png";
import TableMapping from '../components/TableMapping';
import {data} from "../dummyData/dummyApplicationData";
import { recommended } from '../dummyData/dummyRecommendations';
import "../styles/Dashboard.css"
import RecommendedJob from '../components/RecommendedJob';

const Dashboard = () => {

    const [recentApplications, setRecetApplications] = useState([]);
    useEffect(() =>  {
        setRecetApplications(data.slice(0, 3))
    }, [])
    // console.log(data)
    return (
        <>
            <h1 className='center-text mb-4'>Welcome, User</h1>
            <div className='cards-grp'>
                <Cards header="Total Jobs Applied" body="100" imageSrc={newJobImg} />
                <Cards header="In touch with Hiring Contact" body="10" imageSrc={contactImg} />
            </div>
            <div className='recent-applications'>
                <h2 className='center-text mb-3'>Recent Applications</h2>
                <TableMapping tableBody={recentApplications} />
            </div>
            <div className='recommended-jobs d-flex flex-column align-items-center'>
                <h2 className='center-text mb-4'>Recommended Jobs</h2>
                {recommended.map((each, index) => {
                    return (
                        <RecommendedJob key={index} jobDetails={each} />
                    )
                })}
                {/* <RecommendedJob />
                <RecommendedJob /> */}
            </div>
        </>
    )
}

export default Dashboard
