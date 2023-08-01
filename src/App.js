import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('./pages/ProjectDetailsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:id" element={<ProjectDetailsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
