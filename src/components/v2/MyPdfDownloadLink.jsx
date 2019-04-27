import React from 'react';
import { Button, Spinner } from 'reactstrap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const MyPdfDownloadLink = () => (
    <PDFDownloadLink document={<MyDocument />} fileName="andrii-lundiak.pdf">
        {({ blob, url, loading, error }) => { //eslint-disable-line
            // console.log(blob, url, loading, error);
            return (loading ? <Spinner size="sm" color="primary" /> : <Button color="primary">Download PDF (v2)</Button>);
        }}
    </PDFDownloadLink>
);

export default MyPdfDownloadLink;