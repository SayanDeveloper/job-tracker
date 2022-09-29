import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { faq } from '../dummyData/dummyFaqData';
import "bootstrap/dist/css/bootstrap.min.css";

const CustomAccordion = () => {
    return (
        <div className='container'>

            <Accordion>
                {faq.map((each, index) => {
                    return (
                    <Accordion.Item eventKey={`${index}`} key={index}>
                        <Accordion.Header>{each.question}</Accordion.Header>
                        <Accordion.Body>
                            {each.answer}
                        </Accordion.Body>
                    </Accordion.Item>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default CustomAccordion
