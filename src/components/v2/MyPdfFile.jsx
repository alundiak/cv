/* eslint no-unused-vars: 0 */
import React from 'react';
import ReactPDF from '@react-pdf/renderer';
import MyDocument from './MyDocument';

console.dir(ReactPDF);

ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
// TypeError: _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_1__.default.render is not a function