import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const ProjectsPage = lazy(() => import('pages/ProjectsPage'));
const ProjectDetailsPage = lazy(() => import('pages/ProjectDetailsPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Route>
    </Routes>
  );
};
