import React, { useState } from 'react'
import Tag from './Tag'
import CustomModal from './CustomModal';
import { stageData } from '../dummyData/dummyApplicationData';
import "../styles/Table.css"
import JobApplicationStatus from './JobApplicationStatus';

const TableMapping = ({tableBody}) => {
    
    const [showModal, setShowModal] = useState(false);
    const [selectedApplicaion, setSelectedApplication] = useState();

    return (
        <>
            <CustomModal showModal={showModal} setShowModal={setShowModal} type="application">
                <JobApplicationStatus data={selectedApplicaion}  />
            </CustomModal>
            <div className='table'>
                <div className='table-header flex-between center-text oddrow'>
                    <div className='header-item'>Job Id</div>
                    <div className='header-item'>Company Name</div>
                    <div className='header-item'>Status</div>
                    <div className='header-item'>Applied on</div>
                </div>
                <div className='table-body'>
                    {tableBody.map((each, index) => {
                        return (
                            <div key={index} className={`each-row flex-between ${index%2 === 1 ? "oddrow" : ""}`}
                                onClick={()  => {
                                    setSelectedApplication(each);
                                    setShowModal(true);
                                }}
                            >
                                <div className='row-data center-text'><span>Job Id : </span>{each.id}</div>
                                <div className='row-data'>{each.company}</div>
                                <div className='row-data center-children'><Tag textColor={stageData[each.stage - 1].color} bgColor={stageData[each.stage - 1].bg} text={stageData[each.stage - 1].title} /></div>
                                <div className='row-data' style={{fontSize: "14px"}}>{each.date}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}


export default TableMapping
