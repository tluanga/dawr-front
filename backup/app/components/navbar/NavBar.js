import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import './NavBar.css'

import Login from '../login'
// Material ui--
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import BarChartIcon from '@material-ui/icons/BarChart';
import BusinessIcon from '@material-ui/icons/Business';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const BrandText=styled.h4`
    color:white;
`

const ButtonStyled=styled(Button)`
    backgroundColor: '#0063cc';
`

function NavBar() {
    return (
        <div className='navbar'>
            <Link 
                className='navbar__logo'
                to='/'
                >
                <BrandText>Dawr Manager</BrandText>
                
            </Link>
            <div className='navbar__toggle'>
                <Link
                    to='/inventory'
                    className='toggle__item'>
                    <ButtonStyled 
                        variant='contained'
                        startIcon={<BusinessIcon/>}
                        style={{backgroundColor:'white'}}
                        >
                        Inventory
                    </ButtonStyled>
                    
                </Link>
                <Link 
                    to='/pos'
                    className='toggle__item'>
                    <Button 
                        variant='contained'                        
                        style={{backgroundColor:'white'}}
                        startIcon={<ShoppingCartIcon/>}
                    >
                        Point of Sale
                    </Button>
                    
                </Link>
                <Link 
                    to='/report'
                    className='toggle__item'>
                    <Button 
                        variant='contained'
                        style={{backgroundColor:'white'}}
                        startIcon={<BarChartIcon/>}
                        >
                        Report
                    </Button>
                </Link>
                
            </div>
            <div className='navbar__search'>
                <SearchIcon/>
                <input 
                    className='search__input'
                    placeholder='search..'
                />
               
                
            </div>
            
            <Login/>

            {/* Select- Toggle between inventory and Pos */}
            {/* Big Search Bar to easily navigate to function */}
            {/* user Account */}
        </div>
    )
}

export default NavBar
