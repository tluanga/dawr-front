import React from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './BackButton.css'
// expoected props will be link and text

function BackButton(props) {
    return (
        <Link
            to={props.link} 
            className='back'>
            <ArrowBackIosIcon/>
            <div className='back__text'>
             {props.text}
            </div>
            
        </Link>
    )
}

export default BackButton
