import React from 'react';
import { Spinner } from 'reactstrap';
import { BlobProvider } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const MyBlobProvider = () => (
    <BlobProvider document={<MyDocument />}>
        {({ blob, url, loading, error }) => {
            console.log(blob, url, loading, error);
            return (loading
                ? <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                : <iframe width="500" height="500" src={url} title="my-component-frame" />
            );
        }}
    </BlobProvider>
);

export default MyBlobProvider;