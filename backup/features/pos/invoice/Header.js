import React from 'react'
import {Text,View,StyleSheet,Link} from '@react-pdf/renderer'

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderBottomWidth: 2,
      borderBottomColor: '#112131',
      borderBottomStyle: 'solid',
      justifyContent:'space-between'
    },    
    titleText: {
      fontSize: 13,
    //   fontFamily: 'Lato',
    },
      
   
    textSmall:{
        fontSize: 10,
    }
  });
  
  const firmDetail={
      title:'CLD Enterprise',
      addressLine1:'Industry Peng',
      addressLine2:'Ramhlun North',
      city: 'Aizawl',
      state: 'Mizoram',
      pin:796012,
      phoneNumber1:'9774058922',
      phoneNumber2:'8416077426',
      email:'cldenterprise.mz@gmail.com',
      gstno:'AHEPH14141',

  }

  const invoiceDetail={
    invoiceNo:'1213141',
    date:'22/10/2020',
    place:'Aizawl'
  }

  export default () => (
    <View style={styles.container}>
        {/* Dealer information */}
      <View>
        <Text style={styles.titleText}>{firmDetail.title}</Text>
        <Text style={styles.textSmall}>
            {firmDetail.addressLine1},
            {firmDetail.addressLine2}
        </Text>
        <Text style={styles.textSmall}>
            {firmDetail.city},
            {firmDetail.state},
            {firmDetail.pin}
        </Text>
        <Text style={styles.textSmall}>
            Phone:{firmDetail.phoneNumber1}/
            {firmDetail.phoneNumber2}
        </Text>
        <Text style={styles.textSmall}>Email:{firmDetail.email}</Text>
        
      </View>
      {/* Header */}
      <View>
        <Text style={styles.titleText}>TAX INVOICE</Text>        
      </View>
      {/* invoice Detail */}
      <View>
        <Text style={styles.titleText}>Original</Text>
        <Text> </Text>
        <Text style={styles.textSmall}>Invoice Number:{invoiceDetail.invoiceNo}</Text>
        <Text style={styles.textSmall}>Date:{invoiceDetail.date}</Text>
        <Text style={styles.textSmall}>Place:{invoiceDetail.place}</Text>        
      </View>
    </View>
  );
  