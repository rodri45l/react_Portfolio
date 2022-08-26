import React from 'react'
import './SortAlgorithms.css'
import 'charts.css';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const numbers = Array.from({length: 68}, () => Math.floor(Math.random() * 30));
console.log(numbers)

const data = numbers.map((number, index) => {return ({position: index, value: number})})
;


console.log(data)



function SortAlgorithms() {
    return (
        <div className='container container__graph'>
            {numbers.map((value, position) => {return (
<div
    className='bars'
    id={position}
    key={position}
    style={{ height: value+'rem' }}
  ></div> )})}
            
                       
        </div>
    )
}

export default SortAlgorithms