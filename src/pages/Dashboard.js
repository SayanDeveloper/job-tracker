import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import newJobImg from "../assets/newJob.png";
import contactImg from "../assets/contact.png";
import Tag from '../components/Tag';
import TableMapping from '../components/TableMapping';
import {data} from "../dummyData/dummyApplicationData";
import "../styles/Dashboard.css"

const Dashboard = () => {

    const [recentApplications, setRecetApplications] = useState([]);
    useEffect(() =>  {
        setRecetApplications(data.slice(0, 3))
    }, [])
    // console.log(data)
    return (
        <div>
            <h1 className='center-text'>Welcome, User</h1>
            <div className='cards-grp'>
                <Cards header="Total Jobs Applied" body="100" imageSrc={newJobImg} />
                <Cards header="In touch with Hiring Contact" body="10" imageSrc={contactImg} />
            </div>
            <div className='recent-applications'>
                <h2 className='center-text'>Recent Applications</h2>
                <TableMapping tableBody={recentApplications} />
                {/* <table style={{width: "600px"}}>
                    <thead>
                        <tr>
                            <th>Job Id</th>
                            <th>Compnay Name</th>
                            <th>Status</th>
                            <th>Applied on</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='center-text'>123806</td>
                            <td>Company 1</td>
                            <td className='center-children'><Tag text={"Applied"} /></td>
                            <td >27th September</td>
                        </tr>
                        <tr>
                            <td className='center-text'>123806</td>
                            <td>Company 2</td>
                            <td className='center-children'><Tag text={"Applied"} /></td>
                            <td >27th September</td>
                        </tr>
                        <tr>
                            <td className='center-text'>123806</td>
                            <td>Company 3</td>
                            <td className='center-children'><Tag text={"Applied"} /></td>
                            <td >27th September</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default Dashboard
