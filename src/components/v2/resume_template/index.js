import React from 'react';
// import ReactPDF from '@react-pdf/renderer';
import {
  Text,
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/renderer';
// } from '../../dist/react-pdf.es.js'; // original way from github
// } from '../../../../node_modules/@react-pdf/renderer/dist/react-pdf.es.js';

import Header from './Header';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

import avatarImage from './andrii-lundiak_612x821.png';

// console.log(Font); // to verify from which folder it's taken

import fontOpenSansRegular from './fonts/fonts/Open_Sans/OpenSans-Regular.ttf';
import fontLatoRegular from './fonts/fonts/Lato/Lato-Regular.ttf';
import fontLatoItalic from './fonts/fonts/Lato/Lato-Italic.ttf';
import fontLatoBold from './fonts/fonts/Lato/Lato-Bold.ttf';
// const fontOpenSansRegular = './fonts/fonts/Open_Sans/OpenSans-Regular.ttf';
// const fontLatoRegular = './fonts/fonts/Lato/Lato-Regular.ttf';
// const fontLatoItalic = './fonts/fonts/Lato/Lato-Italic.ttf';
// const fontLatoBold = './fonts/fonts/Lato/Lato-Bold.ttf';

// https://github.com/diegomura/react-pdf/issues/44#issuecomment-450791802
// To import fonts from google fonts you can follow the below steps:
// 1) Select Google fonts reference link from fonts.google.com
// e.g., https://fonts.googleapis.com/css?family=Source+Sans+Pro
// 2) Open it into the browser.
// 3) You'll be able to find https://fonts.gstatic.com url
// e.g., https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Lato Bold',
    // fontFamily: 'Times-Bold', // looks standard, built in support by @react-pdf/renderer
    textAlign: 'center',
    marginTop: 25,
    paddingTop: 10,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
});

// OLD code (from REPL)
// Font.register(`${__dirname}/fonts/fonts/Open_Sans/OpenSans-Regular.ttf`, {
//   family: 'Open Sans',
// });
// Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Regular.ttf`, {
//   family: 'Lato',
// });
// Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Italic.ttf`, {
//   family: 'Lato Italic',
// });
// Font.register(`${__dirname}/fonts/fonts/Lato/Lato-Bold.ttf`, {
//   family: 'Lato Bold',
// });

// NEW code (based on Documentation page)
Font.register({
  family: 'Open Sans',
  src: fontOpenSansRegular
});
Font.register({
  family: 'Lato',
  src: fontLatoRegular
});
Font.register({
  family: 'Lato Italic',
  src: fontLatoItalic
});
Font.register({
  family: 'Lato Bold',
  src: fontLatoBold
});

// Multiple font sources
// Font.register({
//   family: 'Lato',
//   fonts: [
//     { src: fontLatoRegular }, // font-style: normal, font-weight: normal
//     { src: fontLatoItalic, fontStyle: 'italic' },
//     { src: fontLatoBold, fontStyle: '???', fontWeight: 700 },
//   ]
// });
// Doesn't really work for the code example above - coz all files are different (fontStyle diff.).
// Expects explicit usage of family: "Lato Bold"

const ResumePage = props => (
  <Page {...props} style={styles.page}>
    <Header />
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Image
          src={avatarImage}
          style={styles.image}
        />
        <Education />
        <Skills />
      </View>
      <Experience />
    </View>
    <Text style={styles.footer}>This IS the candidate you are looking for</Text>
  </Page>
);

const Output = () => (
  <Document
    author="Andrii Lundiak"
    keywords="frontend, javascript, react, ukraine, poland"
    subject="The resume of Andrii Lundiak"
    title="Resume (CV)"
  >
    {/* <ResumePage size="A4" /> */}
    <ResumePage orientation="landscape" size="A4" />
    {/* <ResumePage size={[380, 1250]} /> */}
  </Document>
);

export default Output; // in parent will be wrapped by PDFViewer
// console.log(ReactPDF.render); // is available when to include "dist/react-pdf.es.js" or "dist/react-pdf.cjs.js

// ReactPDF.render(<Output />, `${__dirname}/output-al.pdf`); // this will not render
// Example of usage:
// https://github.com/KerenChandran/resume/blob/master/src/index.js
// But that code is outdated