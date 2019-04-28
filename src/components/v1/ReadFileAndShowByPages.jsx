import React from 'react';
import { Button } from 'reactstrap';
import { Document, Page } from 'react-pdf';

// https://github.com/wojtekmaj/react-pdf
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import pdfFile from './andrii-lundiak-cv.pdf';
//
// Display PDFs in your React app as easily as if they were images.
// Read file from local or remote, split by pages.
// Clicking by pages can be implemented.
//

class ReadFileAndShowByPages extends React.PureComponent {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div>
                <Document
                    file={pdfFile}
                    onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={1} />
                    <Page pageNumber={2} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
                <Button color="primary">Download PDF (v1 - not finished)</Button>
            </div>
        );
    }
}

export default ReadFileAndShowByPages;