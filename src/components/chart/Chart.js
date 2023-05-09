import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart( {title,data,dataKey,grid}) {
    //   const resizeObserver = new ResizeObserver(entries => {
    //     // We wrap it in requestAnimationFrame to avoid this error - ResizeObserver loop limit exceeded
    //     window.requestAnimationFrame(() => {
    //       if (!Array.isArray(entries) || !entries.length) {
    //         return;
    //       }
    //       // your code
    //     });
    //  });

  return (
    
    <div className="chart">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd"/>
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
