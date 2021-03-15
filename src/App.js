import React from 'react';
import BarChart from './Components/BarChart';
import Sidecard from './Components/Sidecard'
import Navbar from './Components/Navbar'
import Bottom from './Components/Bottom';
import ResponsiveDrawer from './Components/ResponsiveDrawer'

const App=()=>{
    return(
        <>
       
            <Navbar/>
            
        <BarChart/>
        <Sidecard/>
        <Bottom/>
        </>
    )
}

export default App;