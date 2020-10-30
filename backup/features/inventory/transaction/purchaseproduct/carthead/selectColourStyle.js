import chroma from 'chroma-js';


  
 export const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled ? 'red' : 'blue',
        color: '#FFF',
        cursor: isDisabled ? 'not-allowed' : 'default',
    
      };
    },

  };