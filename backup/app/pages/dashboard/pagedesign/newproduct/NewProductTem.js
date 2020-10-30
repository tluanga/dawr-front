import React from 'react'
import {} from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './newproduct.css'


function NewProductTem() {

    //--->



    return (
        <form>
          <div className='container'>
            <div className='row1'>
                <TextField
                name='name'
                className='row1__item'
                variant='outlined'
                label='Name'
                size='small'              
                />
               
                
            </div>
            <div className='row2'>
                <TextField
                    name='abbreviation'
                    className='row1__item'
                    variant='outlined'
                    label='Abbreviation' 
                    size='small'              
                    />
            </div>
            <div className='row3'>
                <TextField
                name='description'
                className='row1__item'
                variant='outlined'
                label='Description' 
                size='small'
                multiline
                rows={5}

                />
            </div> 
           
            <div className='buttongroup'>
              <Button
                type='submit'
                variant='outlined'
                color='primary'            
                >Submit</Button>
              <Button
                variant='outlined'
                color='secondary'
              >Reset</Button>
            </div>  
            
          </div>        
          
         
          
         
          
        </form>
    )
}

export default NewProductTem
