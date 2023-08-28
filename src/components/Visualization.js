import React, { useState, useEffect } from 'react'
import axios from 'axios'
import rd3 from 'react-d3-library';

const Visualization = () => {

    // Initialize data state
    const [data, setData] = useState([])

    // Call Covid API data upon page load
    useEffect(() => {
        getData()
    })

    const getData = async () => {
        await axios.get('https://data.cdc.gov/resource/n8mc-b4w4.json')
        .then((res) => {
            setData(res.data)
        })
    }
    

  return (
    <div>
        <div>Visualization</div>
        <div>
            <button onClick = {() => {
                console.log(data)
            }}>check data</button>
        </div>
    </div>
  )
}

export default Visualization