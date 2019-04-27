import React from 'react';

// import { Quixote } from './Quixote';
// import { QuixotePdfNodeRendered } from './Quixote';
import { QuixotePdfViewer } from './Quixote';
import { QuixoteDownloadLink } from './Quixote';
import { QuixoteBlobProvider } from './Quixote';

// import MyDocument from './MyDocument';
// import MyPdfNodeRendered from './MyPdfNodeRendered';
import MyPdfViewer from './MyPdfViewer';
import MyPdfDownloadLink from './MyPdfDownloadLink';
import MyBlobProvider from './MyBlobProvider';

const QuixoteExample = () => ( //eslint-disable-line
    <React.Fragment>
        {/* <Quixote /> */}
        {/* <QuixotePdfNodeRendered /> */}
        Viewer: <QuixotePdfViewer />
        Download: <QuixoteDownloadLink />
        Blob: <QuixoteBlobProvider />
        {/*
        If any of two above rendered, then in console:
        TypeError: Cannot read property 'hasGlyphForCodePoint' of null
        I assume, it's because of double Font.register()
        */}
    </React.Fragment>
);

const MyCode = () => (
    <React.Fragment>
        {/* <MyDocument /> */}
        {/* <MyPdfNodeRendered /> */}
        <MyPdfViewer />
        <MyBlobProvider />
        <MyPdfDownloadLink />
    </React.Fragment>
);

const CurriculumVitaeVersion2 = () => (
    <React.Fragment>
        <h3>Using <code>@react-pdf/renderer</code></h3>
        {/* <QuixoteExample /> */}
        <MyCode />
    </React.Fragment>
);

export default CurriculumVitaeVersion2;