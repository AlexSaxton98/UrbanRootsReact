import React from 'react'

function FAQ({faq, index}) {
    return (
        <div 
        className= {"faq " + (faq.open ? 'open' : '')}
        key={index}>
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ