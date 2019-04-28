import React from 'react';
// import { Button, Spinner } from 'reactstrap';
// import ReactPDF from '@react-pdf/renderer'; // will work after CJS/ES
import { PDFViewer } from '@react-pdf/renderer';
// import { PDFDownloadLink } from '@react-pdf/renderer';

import ResumeExample from './resume_template';

const documentBody = <ResumeExample />;

const MyResumeUsingExample = () => (
    <React.Fragment>
        <PDFViewer width="100%" height="700">
            {documentBody}
        </PDFViewer>

        {/* <PDFDownloadLink document={documentBody} fileName="andrii-lundiak-based-on-template.pdf">
            {({ blob, url, loading, error }) => { //eslint-disable-line
                return (loading
                    ? <Spinner size="sm" color="primary" />
                    : <Button color="primary">Download PDF (v2 - based on template)</Button>
                );
            }}
        </PDFDownloadLink> */}

        {/* Having PDFDownloadLink code above (rendered after PDFViewer), causes an error:
            react-pdf.browser.es.js:5588
            TypeError: Cannot read property 'hasGlyphForCodePoint' of null
            at react-pdf.browser.es.js:3777
            Note: Using once rendered variable documentBody didn't help also.
        */}
    </React.Fragment>
);

export default MyResumeUsingExample;