(function() {
    'use strict';

    const pdfFileTitle = 'Andrii Lundiak';
    const pdfFileName = 'Andrii_Lundiak_CV.pdf';

    function runJsToPdf() {
        // let doc = new jsPDF();

        // Landscape export, 2×4 inches
        let doc = new jsPDF({
            orientation: 'landscape',
            unit: 'in', // when I uncomment these 2 lines
            format: [4, 2] // PDF file is NOT EMPTY anymore...
        });

        doc.text(pdfFileTitle, 1, 1);
        doc.save(pdfFileName);

    }

    // runJsToPdf();

    function runHtmlToPdf() {
        const element = document.getElementById('element-to-print');

        let options = {
            margin: 1,
            filename: pdfFileName,
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                dpi: 192,
                letterRendering: true
            },
            jsPDF: {
                unit: 'in',
                format: 'letter',
                orientation: 'portrait'
            }
        }

        html2pdf(element, options);
    }

    // runHtmlToPdf();

    function runHtmlToPdf2(){

        const myWebSiteUrl = 'https://alundiak.github.io/cv/';
        const serviceUrl = `http://www.html2pdf.it/?url=${myWebSiteUrl}`; // as a sanity, maybe used "String.raw" before string value, so that to avoid any \t \n

        window.open(serviceUrl);

    }

    $('#generatePdf1').on('click', runJsToPdf);
    $('#generatePdf2').on('click', runHtmlToPdf); // creates separate frame about:blank can bee seen in Dev tools
    $('#generatePdf3').on('click', runHtmlToPdf2); // creates separate frame about:blank can bee seen in Dev tools

}());
