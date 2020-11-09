import React from 'react'
import{Route,Switch} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/navbar/NavBar'
import DashBoard from '../dashboard/DashBoard'
import Inventory from '../../../features/inventory'
// import PointOfSale from '../../../features/pos'
import Report from '../../../features/report'
import Pos from '../../../features/pointOfSale/'

const Container=styled.div`
    width:100vw;
`

const RouteSection=styled.section`

`

function Main() {
    
    return (
        <Container>
            <Navbar/>
            <RouteSection>
                <Switch>
                    <Route
                       
                        path='/inventory'
                        component={Inventory}
                    />
                    <Route
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
           
        </Container>
    )
}

export default Main
