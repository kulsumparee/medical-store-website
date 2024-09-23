import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import SliderData from "../../../assets/MapData/accordianData/sliderData"

function valuetext(value) {
    return `${value}°C`;
}

const SliderSec = () => {
  return (
    <div>
          <div className='  text-center items-center mt-5'>
              {
                  SliderData.map(data =>
                      <div className='flex gap-4 py-3'>
                          <h1 className=' font-semibold'>{data.stars} </h1>
                          <Box sx={{ width: 300 }}>
                              <Slider
                                  aria-label="Temperature"
                                  defaultValue={30}
                                  getAriaValueText={valuetext}
                                  color="warning"
                              />
                          </Box>
                          <h1 className=' font-semibold'>{data.percent} </h1>
                      </div>
                      
                  )
                  
                  }
             
          </div>
    </div>
  )
}

export default SliderSec
