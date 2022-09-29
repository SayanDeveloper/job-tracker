import React, { useState } from 'react'
import Tag from './Tag'
import CustomModal from './CustomModal';
import { stageData } from '../dummyData/dummyApplicationData';
import "../styles/Table.css"

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

const JobApplicationStatus = ({data}) => {
    return (
        <div>
            <h4>{data?.role}</h4>
            <p className='fs-5'>{data?.company}</p>
            <p>Location: {data?.location}</p>
            
            <div className='flex extra-detail mb-2'>
                <div>
                    <div className='special-label'>
                        Duration
                    </div>
                    <div>
                        {data?.duration}
                    </div>
                </div>
                <div>
                    <div className='special-label'>
                        Stipend
                    </div>
                    <div>
                        {data?.salary}
                    </div>
                </div>
            </div>
            <div>
                Your current stage of application is : <Tag textColor={stageData[data?.stage - 1].color} text={stageData[data?.stage - 1].title} />
            </div>
            <div className='mt-2'>
                That means :
                <p>{stageData[data?.stage - 1].Description}</p>
            </div>
        </div>
    )
}


export default TableMapping
