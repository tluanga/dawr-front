import React from 'react'
import PosTerminal from './terminal'
import Invoice from './invoice/Invoice'
import { PDFDownloadLink,PDFViewer } from '@react-pdf/renderer';

import './pos.css'

const Pos=()=>{
    
    return(
        <div>
            {/* <PDFViewer>
                <Invoice/>
            </PDFViewer> */}
            <PosTerminal/>
            {/* <PDFDownloadLink
                document={<Invoice/>}
            >
                press download
            </PDFDownloadLink> */}
            
        </div>
    )
}

export default Pos