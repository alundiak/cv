# cv
My Curriculum Vitae Project


# Features
* Analyze existed Word/PDF Resume/CV, take pros/cons, interview questions, and rework it in better manner.
* Add resume URL from Google Drive
* Make "Download PDF".
* Get D3.js and create Skills Charts, with years and level and maybe people recognition (ported somehow from LinkedIn), etc.
* Maybe add "Motivation Letter" section.
* Maybe add section "My Ideal Company / Project" ported from wordpress article.
* Add hobbies as icons.


# Tech Notes

* Github Pages deployed/hosted.
* JavaScript/HTML/CSS based.
* ES6/ES7/ReactJS.
* Designed Responsive and using all latest design features from web.
* Data for CV, divided into sections might be in JSON.
* Timeline? http://freefrontend.com/css-timelines/


# Tech Notes - Tools to create PDF file and download.

* http://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
* `jsPDF` - https://github.com/MrRio/jsPDF
* `html2pdf` - https://github.com/eKoopmans/html2pdf (based on jsPDF)
* `html2pdf.it` - https://github.com/ebdrup/html2pdf.it (requires NodeJS and maybe phantomjs). http://www.html2pdf.it. Can be used as remote service to generate PDF.
* TODO: https://www.npmjs.com/package/gulp-html2pdf
* TODO: https://wkhtmltopdf.org/
* https://github.com/devongovett/pdfkit ?


# Tech Notes - using React tools
* [ReactStrap](https://reactstrap.github.io/) ?
* [react-pdf](https://github.com/wojtekmaj/react-pdf) (837 commits, last Apr-24-2019)
    * Display PDFs in your React app as easily as if they were images. In fact it read existed file from local or remote, split by pages.
    * depends/relies on [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist)
    * works with webpack copy plugin.
* [React-PDF](https://github.com/diegomura/react-pdf) aka `@react-pdf/renderer` (611 commits, last Apr-15-2021)
    * Issue 1 - https://github.com/diegomura/react-pdf/issues/239
    * Outdated, but still: https://gist.github.com/atolkachiov/dd2e257f669b1a5ca06e4f4514326d3b
    * deprecated ['@react-pdf/styled-components'](https://github.com/react-pdf/styled-components)
    * https://react-pdf.org/blog/announcing-react-pdf-v2
* [React Helmet](https://github.com/nfl/react-helmet)



# Resources / Examples

* http://tojoshan.deviantart.com/art/My-Skills-191335061 - skills pie/graph/donut/etc
* https://www.pinterest.com/explore/cv-website/ - DESIGN ideas REVIEW MUST HAVE
* https://www.quora.com/Examples-of-websites-that-host-a-persons-CV-or-Resume - READ IT !!!
* https://florian.rivoal.net/cv.html - simple one page CV
* https://zerply.com/rogie - one page
* https://www.erik-koopmans.com/portfolio/ - nice, unique simple design of single, very single page with no even scrolling.
* https://www.charles-richard.net/ - nice idea, with icons to show hobbies/likes/interests
* http://www.rleonardi.com/interactive-resume/ - interactive CV page
* http://www.anniwang.com/ - Interactive CV page
* http://www.guillaumejuvenet.com/ - Interactive CV page
* http://yasoob.me/Resume.pdf - Just well formed, public PDF.
* http://michaelrambeau.com/resume/
* http://patrykgrudzien.github.io/
* http://paulmillr.com/
* https://twitter.github.io/ - nice grid with card/tiles-like sections
* http://passportjs.org/ - looks like similar tiles as on github
* https://www.campaignmonitor.com/create/ - nice tiles.
* https://krostyslav.github.io/
* http://www.paulinakowal.pl
* https://www.atlassian.com/git/articles/10-years-of-git - nice examples for work projects history.
* https://dribbble.com/shots/1091421-Infographic-resume-PSD


# Other

* https://enhancv.com/ - CV Online Creator
; https://resumedone.io/ - Another CV Builder online
* http://www.mastersportal.eu/articles/406/write-a-successful-motivation-letter-for-your-masters.html
* https://www.indeed.com/career-advice/resumes-cover-letters/cv-format-guide
* https://medium.com/pixelpoint/handoffs-guide-for-pixel-perfect-design-part-ii-d91999742dd9 - example of grid
* http://bradfrost.github.io/this-is-responsive/patterns.html - use/look to patterns - code examples on codepen.
- https://www.telerik.com/blogs/generating-pdf-html-react-demo-exporting-invoices
- https://github.com/bergenhem/kendoreact-pdf-export-sample-app
