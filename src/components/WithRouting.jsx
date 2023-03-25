// https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
import React from 'react';
import {
    HashRouter,
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import MainMenu from './MainMenu';

// const Version1 = () => <div><h2>Version1</h2></div>;
// const Version2 = () => <div><h2>Version2</h2></div>;

import Version1 from './v1/v1';
import Version2 from './v2/v2';

// const LazyCurriculumVitaeVersion1 = React.lazy(() => import('./v1/v1'));
// const LazyCurriculumVitaeVersion2 = React.lazy(() => import('./v2/v2'));

// const Version1 = () => (
//     <React.Suspense fallback={<div>Simple Loading...</div>}>
//         <LazyCurriculumVitaeVersion1 />
//     </React.Suspense>
// );

// const Version2 = () => (
//     <React.Suspense fallback={<div>Simple Loading...</div>}>
//         <LazyCurriculumVitaeVersion2 />
//     </React.Suspense>
// );

// It will use "#" between host name and actual route.
const WithHashRouter = () => (
    <HashRouter basename="/">
        <div>
            <MainMenu />
            <Routes>
                <Route path="/version1" element={<Version1 />} />
                <Route path="/version2" element={<Version2 />} />
            </Routes>
        </div>
    </HashRouter>
);

const WithBrowserRouter = () => (
    <BrowserRouter>
        <div>
            <MainMenu />
            <Routes>
                <Route path="/version1" element={<Version1 />} />
                <Route path="/version2" element={<Version2 />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export {
    WithBrowserRouter,
    WithHashRouter
};
