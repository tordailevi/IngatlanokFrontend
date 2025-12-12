import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './App.css';
import PublicPage from "./pages/PublicPage";
import AdminPage from "./pages/AdminPage";
import Layout from "./pages/Layout";
import { IngatlanokProvider } from './contexts/IngatlanContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="PublicPage" replace />
      },
      {
        path: "/",
        element: <PublicPage />
      },
      {
        path: "*",
        element: (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>404 - Az oldal nem található</h1>
            <a href="/">Vissza a főoldalra</a>
          </div>
        )
      }
    ]
  }
])

function App() {
  return (
    <IngatlanokProvider>
      <RouterProvider router={router} />
    </IngatlanokProvider>
  )
}



export default App;
