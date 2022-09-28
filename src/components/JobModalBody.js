import React from "react"

const JobModalBody = ({data}) => {
    return (
        <>
            <h4>{data.role}</h4>
            <p className='fs-5'>{data.company}</p>
            <p>Location: {data.location}</p>
            <p className='my-2'><i className="fa fa-users" aria-hidden="true"></i> {data.applicants} people applied</p>
            <div className='flex extra-detail mb-2'>
                <div>
                    <div className='special-label'>
                        Duration
                    </div>
                    <div>
                        {data.duration}
                    </div>
                </div>
                <div>
                    <div className='special-label'>
                        Stipend
                    </div>
                    <div>
                        {data.salary}
                    </div>
                </div>
            </div>
            <h5>Description</h5>
            <p className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas veritatis ut recusandae exercitationem blanditiis natus cumque odio, corrupti at. A corporis, aspernatur expedita mollitia qui cupiditate quibusdam rerum sequi.</p>
            <h5>Skills Required</h5>
            <ul>
                {data.skills.map((each, index) => {
                    return (
                        <li key={index}>{each}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default JobModalBody;