import React, { useState } from 'react'
import CustomModal from './CustomModal';
import JobModalBody from './JobModalBody';
import CompanyLogo from "../assets/compLogo.jpg"
import "../styles/recommended.css"

const RecommendedJob = ({jobDetails}) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <CustomModal showModal={showModal} setShowModal={setShowModal}>
                <JobModalBody data={jobDetails} />
            </CustomModal>
            <div className='rec-job-box' onClick={() => setShowModal(true)}>
                <div className='flex-between'>
                    <div className='role-name-location'>
                        <div className='job-title'>{jobDetails.role}</div>
                        <div className='comp-name'>{jobDetails.company}</div>
                        <div className='location'><i className="fa fa-map-marker" aria-hidden="true" /> {jobDetails.location}</div>
                    </div>
                    <div className='comp-logo'><img src={CompanyLogo} /></div>
                </div>
                <div className='flex extra-detail'>
                    <div>
                        <div className='special-label'>
                            Duration
                        </div>
                        <div>
                            {jobDetails.duration}
                        </div>
                    </div>
                    <div>
                        <div className='special-label'>
                            Stipend
                        </div>
                        <div>
                            {jobDetails.salary}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendedJob
