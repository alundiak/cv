import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const MyPdfViewer = () => (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
);

ReactDOM.render(<MyPdfViewer />, document.getElementById('app'));