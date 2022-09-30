import React, { useEffect } from 'react'
import CustomAccordion from '../components/CustomAccordion'

const FAQs = ({setProgress}) => {

    useEffect(() => {
        setTimeout(() => {
            setProgress(100);
        }, 100);
    }, [])
    
    return (
        <div className='container'>
            <h1 className='center-text mb-4'>Frequently Asked Questions</h1>
            <CustomAccordion />
        </div>
    )
}

export default FAQs
