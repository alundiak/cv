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
* ES6/ES7 (no transpilers, no webpack-like tools. Maybe RequireJS for modules if needed).
* Building tasks by using GulpJS.
* Designed Responsive and using all latest design features from web.
* Data for CV, divided into sections might be in JSON, which we simply $.get() or maybe !!! maybe use RequireJS  -ideally ES6 Module, but it's not yet supported.
* Timeline? http://freefrontend.com/css-timelines/

# Download PDF version

* http://stackoverflow.com/questions/18191893/generate-pdf-from-html-in-div-using-javascript
* `jsPDF` - https://github.com/MrRio/jsPDF
* `html2pdf` - https://github.com/eKoopmans/html2pdf (based on jsPDF)
* `html2pdf.it` - https://github.com/ebdrup/html2pdf.it (requires NodeJS and maybe phantomjs). http://www.html2pdf.it. Can be used as remote service to generate PDF.
* TODO: https://www.npmjs.com/package/gulp-html2pdf
* TODO: https://wkhtmltopdf.org/
* https://github.com/devongovett/pdfkit ?

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


# Other

* https://enhancv.com/ - CV Online Creator
* http://www.mastersportal.eu/articles/406/write-a-successful-motivation-letter-for-your-masters.html
* https://medium.com/pixelpoint/handoffs-guide-for-pixel-perfect-design-part-ii-d91999742dd9 - example of grid
* http://bradfrost.github.io/this-is-responsive/patterns.html - use/look to patterns - code examples on codepen.