import './Questions.css'
import React, { useState } from "react";
import FAQ from "../components/FAQ";





function Questions () {
    
    const [faqs] = useState([
            {
                question: 'Will my plants die when I am on holiday?',
                answer: 'It depends on the length of time you’re away for, on the weather while you are away, on the plants position relative to the sun. However, with a thorough soaking before you leave, by grouping all the plants together – preferably in a shadier spot – your plants should be able to survive for 7 days. For more extensive periods of time, we suggest you blackmail your friends into watering them for you...',
                open: true

            },
            {

            question: 'I have killed plants before, how can you help me do a better job?',
            answer: 'All of our plants have their own individual plant page which not only describes what conditions the plant best thrives in but also covers their preferred watering and fertilising routine and, in the case of outdoor plants, what type and how much compost they require.All of our outdoor plants are also delivered with a care-guide as well as an extensive potting guide of how to pot them.',
            open: false

            },
            {

                question: 'Will my plants survive outside all year round?',
                answer: 'All of our outdoor plants have been chosen with the British climate in mind and so should be happy outside throughout the seasons. British weather can be incredibly unpredictable however, so be prepared to take action if the forecast is predicting the hottest summer since 1976 or hurricane-strength winds.You may have heard of plants that are hardy, i.e. they can survive harsh winters, and tender, i.e. they can’t. There is a small handful of plants that we love but that we would recommend bringing inside over winter and these are highlighted individually.',
                open: false
                
                },
                {

                    question: 'How would i repot my plant?',
                    answer: ' You will need a plant, a suitable container, compost to match your plant and a willingness to get your hands dirty – unless you are equipped with gardening gloves or you are willing to sacrifice some rubber gloves!',
                    open: false
                    
                    },
        ]);

        return(
        <div className="Questions">
             <div className="faqs">
                 {faqs.map((faq, i) => (
                     <FAQ faq={faq} index={i} key ={i} />
                 ))}
             </div>
            </div>

            
        
    )
}


export default Questions
