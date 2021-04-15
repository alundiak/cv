import React from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import styled from 'styled-components';

// was styled.Text from @react-pdf/styled-components
const Heading = styled.header`
  margin: 10px;
  font-size: 22px;
  font-family: 'Helvetica';
  color: green;
`;

const MyDocument = () => (
    <Document>
        <Page>
            <Heading>
                Andrii Lundiak a
            </Heading>
        </Page>
    </Document>
);

const MyStyledDocumentViewer = () => (
    <PDFViewer width="500" height="500">
        <MyDocument />
    </PDFViewer>
);

export default MyStyledDocumentViewer;