import React from 'react'
import Tag from './Tag'
import "../styles/Table.css"

const TableMapping = ({tableBody}) => {
    console.log(tableBody)
    return (
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
                        <div key={index} className={`each-row flex-between ${index%2 === 1 ? "oddrow" : ""}`}>
                            <div className='row-data center-text'><span>Job Id : </span>{each.id}</div>
                            <div className='row-data'>{each.company}</div>
                            <div className='row-data center-children'><Tag text={each.status} /></div>
                            <div className='row-data' style={{fontSize: "14px"}}>{each.date}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TableMapping
