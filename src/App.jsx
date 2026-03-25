import './App.css'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useState, useEffect } from 'react'; //object distructuring
import supabase from './utils/supabase';
import { SessionContext } from './contexts/SessionContext';
import Profile from './pages/Profile';
import EditProfilePage from './pages/EditProfilePage';

function App() {

  // state
  const [session, setSession] = useState(null)
  const [profile, setProfile] = useState(null)

  // useEffect
  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("event", event)
      console.log("session", session)
      if (event === 'SIGNED_OUT') {
        setSession(null)
      } else if (session) {
        setSession(session)
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq("id", session.user.id)
        .single()

      if (error) alert(error)
      if (data) {
        setProfile(data)
      }
    }
    if (session) {
      fetchProfile()
    }
  }, [session])

  return (
    <SessionContext.Provider value={{ session, profile, setProfile }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="editprofile" element={<EditProfilePage />} />
      </Routes>
    </SessionContext.Provider>
  )

}
export default App;
