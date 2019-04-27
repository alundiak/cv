import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const MyPdfViewer = () => (
    <PDFViewer width="500" height="500">
        <MyDocument />
    </PDFViewer>
);

export default MyPdfViewer;