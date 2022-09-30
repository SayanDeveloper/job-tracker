import React from "react";
import { stageData } from "../dummyData/dummyApplicationData";
import Tag from "./Tag";

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
            <h6 className="mb-0">Job Timeline</h6>
            <div className="job-timeline d-flex flex-column">
                <div className="d-flex align-items-center">
                    <div className={`bullet ${data?.stage >= 1 && "done"}`}></div>
                    <div className="status-name">Job Applied </div>
                    {data?.stage >= 1 &&
                        <div className="status-date"> - 27th September, 2022</div>
                    }
                </div>
                <div className={`line ${data?.stage >= 2 && "done"}`}></div>
                <div className="d-flex align-items-center">
                    <div className={`bullet ${data?.stage >= 2 && "done"}`}></div>
                    <div className="status-name">In Touch </div>
                    {data?.stage >= 2 &&
                        <div className="status-date"> - 27th September, 2022</div>
                    }
                </div>
                <div className={`line ${data?.stage >= 3 && "done"}`}></div>
                <div className="d-flex align-items-center">
                    <div className={`bullet ${data?.stage >= 3 && "done"}`}></div>
                    <div className="status-name">Project Assigned </div>
                    {data?.stage >= 3 &&
                        <div className="status-date"> - 27th September, 2022</div>
                    }
                </div>
                <div className={`line ${data?.stage >= 4 && "done"}`}></div>
                <div className="d-flex align-items-center">
                    <div className={`bullet ${data?.stage == 4 && "done"}`}></div>
                    <div className="status-name">Selected </div>
                    {data?.stage == 4 &&
                        <div className="status-date"> - 27th September, 2022</div>
                    }
                </div>
            </div>
            <div className="mt-2">
                Your current stage of application is : <Tag textColor={stageData[data?.stage - 1].color} text={stageData[data?.stage - 1].title} />
            </div>
            <div className='mt-2'>
                That means :
                <p>{stageData[data?.stage - 1].Description}</p>
            </div>
        </div>
    )
}

export default JobApplicationStatus;