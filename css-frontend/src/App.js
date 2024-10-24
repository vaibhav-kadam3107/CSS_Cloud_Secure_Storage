// import Layout from './components/Layout';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// // import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Course from './pages/Course';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import Signup from './pages/Signup'; // Add a signup page
// import LandingPage from './pages/LandingPage';

// // Simulate user authentication (replace this with actual auth logic)
// let isAuthenticated = false; // Set this to true once user logs in

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           {/* Landing Page Route */}
//           <Route path='/' element={<LandingPage />} />
          
//           {/* Dashboard Route (Protected) */}
//           <Route
//             path='/dashboard'
//             element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />}
//           />

//           {/* Additional Routes */}
//           <Route
//             path='/course'
//             element={isAuthenticated ? <Course /> : <Navigate to='/login' />}
//           />
//           <Route
//             path='/profile'
//             element={isAuthenticated ? <Profile /> : <Navigate to='/login' />}
//           />

//           {/* Login & Signup Routes */}
//           <Route
//             path='/login'
//             element={isAuthenticated ? <Navigate to='/dashboard' /> : <Login />}
//           />
//           <Route
//             path='/signup'
//             element={isAuthenticated ? <Navigate to='/dashboard' /> : <Signup />}
//           />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }

// export default App;

// ----------------------------------------
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Dashboard from './pages/Dashboard';
import FileUpload from './pages/FileUpload';
import Course from './pages/Course';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import LandingPage from './pages/LandingPage';

// Simulate user authentication (Replace this with real auth logic later)
let isAuthenticated = true; // Temporarily set to true for testing purposes

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Landing Page Route */}
          <Route path='/' element={<LandingPage />} />

          {/* Unprotected Dashboard Route (for temporary testing) */}
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/FileUpload' element={<FileUpload />} />

          {/* Unprotected Additional Routes */}
          <Route path='/course' element={<Course />} />
          <Route path='/profile' element={<Profile />} />

          {/* Login & Signup Routes */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
