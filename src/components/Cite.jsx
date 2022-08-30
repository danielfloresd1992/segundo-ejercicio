import { useState } from 'react';
import cite from '../assets/cite.json';


export const citeLength = cite.length;
console.log(citeLength);

export const Cite = ({number}) => {
    
    let [index, setIndex] = useState(0);
        console.log(cite[number])
    return (
        <div className='target'>
            <h3><blockquote>{cite[number]['quote']}</blockquote></h3>
            <cite>{cite[number]['author']}</cite>
        </div>
    );
}

