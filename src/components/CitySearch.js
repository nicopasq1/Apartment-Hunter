import React, { useState } from "react";
import skylineBg from '../images/skyline Background.avif'
import { Button, Grid2, TextField } from '@mui/material'
import { useNavigate } from "react-router";


function CitySearch(){
    const [location, setLocation] = useState('')
    const navigation = useNavigate()
  
    function submitForm(e) {
      e.preventDefault()
      navigation('/home')
      console.log(location)
    }

    return (
        <div className='citySearchPage'>
      <img src={skylineBg} alt='skylineBackground' className='skylineBg' />

      <form onSubmit={e => submitForm(e)}>
        <Grid2 container justifyContent={'center'}>

          <TextField
            variant='outlined'
            placeholder='Enter City Name or Zip Code'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ width: '30%', bgcolor: 'rgba(1000,1000,1000, .5)', marginTop: '30vh' }}
          />

          <Button
            type='submit'
            variant='contained'
            color='info'
            sx={{ height: '5.5vh', marginTop: '30.15vh', marginLeft: '1vw' }}>Search Homes</Button>

        </Grid2>
      </form>
    </div>
    )
}


export default CitySearch