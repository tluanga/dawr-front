import styled from 'styled-components'


export const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: { 
        position: 'absolute',
        width:'450px',
        height:'400px',
        top: '22.5vh',
        bottom: '22.5vh',
        left: '35vw',
        right: '35vw',        
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '5px'
      }
  };

export const Wrapper=styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
  `
export const Form=styled.form`
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
  `
export const Control=styled.section`
    display:flex;
    width:380px;
    flex-direction:row;
    justify-content:space-between;
    padding-top:5vh;
  `
