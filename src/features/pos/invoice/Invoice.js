import React from 'react';
import ReactPDF,{ Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Header from './Header'
import CustomerDetail from './CustomerDetail'
import Body from './Body'
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});



// Create Document Component
const MyDocument = () => (
  <Document>
    
    <Page 
      size="A4" 
      style={styles.page}
      orientation='portrait'
    >
      <Header/>
      <CustomerDetail/>
      <Body/>
      <View style={styles.section}>
        <Text>Section #1</Text>
    
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument