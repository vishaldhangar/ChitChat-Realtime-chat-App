import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route,Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/loginPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import {Loader} from 'lucide-react'
import {Toaster} from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore.js'

const App = () => {
  const {authUser,checkAuth , isCheckingAuth}=useAuthStore();

  const {theme}=useThemeStore();

  useEffect(()=>{
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser)
    return (
       <div className='flex items-center justify-center h-screen'>
         <Loader className='size-10 animate-spin'/>
       </div>
    )

  return (
    <div data-theme={theme}>
      
      <Navbar/>

      <Routes>
        {/* agr user login hai toh home page pai jayega wrna login page pai jayega */}
      <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />

      {/* // agar user login nhi hai toh signup page pai jayge else login page pai jayega */}
        <Route path="/signup" element={!authUser ?<SignUpPage />:<Navigate to="/" />} />

        {/* // agar user login nhi hai toh login page pai jayge else Home Page page pai jayega */}
        <Route path="/login" element={!authUser ?<LoginPage />:<Navigate to="/" />} />

        <Route path="/settings" element={<SettingsPage />} />

        {/*agr user login hai toh profile page pai chal ajayeag wrna login page pai jayega  */}
        <Route path="/profile" element={authUser ? <ProfilePage />: <Navigate to="/login" />} />
      </Routes>


      <Toaster />
    </div>
  )
}

export default App