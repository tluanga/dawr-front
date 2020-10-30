import React from 'react'
import {View,Text,StyleSheet} from '@react-pdf/renderer'

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderBottomColor: '#112131',
        borderBottomStyle: 'solid',
        justifyContent:'space-between'
      },
      titleText: {
        fontSize: 11,
      //   fontFamily: 'Lato',
      },
        
     
      textSmall:{
          fontSize: 10,
      }
})

const CustomerDetail = () => {

    const customer={
        name:'Lalthansanga',
        gst_code:'HSNKDA131',
    }

    return (
       <View style={styles.container}>
           <View>
               <Text style={styles.titleText}>
                Customer: {customer.name}
               </Text>
               <Text style={styles.textSmall}>
                Gst Code: {customer.gst_code}
               </Text>
           </View>
       </View>
    )
}

export default CustomerDetail
