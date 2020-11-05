import React from 'react'
import{Route,Switch} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/navbar/NavBar'
import DashBoard from '../dashboard/DashBoard'
import Inventory from '../../../features/inventory'
// import PointOfSale from '../../../features/pos'
import Report from '../../../features/report'
import Pos from '../../../features/pointOfSale/'

const RouteSection=styled.section`

`

function Main() {
    
    return (
        <div>
            <Navbar/>
            <RouteSection>
                <Switch>
                    <Route
                       
                        path='/inventory'
                        component={Inventory}
                    />
                    <Route
                        exact
                        path='/pos'
                        component={Pos}
                    />
                    <Route                        
                        path='/report'
                        component={Report}
                    />
                    
                    <Route
                        exact
                        path='/'
                        component={DashBoard}
                    />
                </Switch>
                
            </RouteSection>
           
        </div>
    )
}

export default Main
