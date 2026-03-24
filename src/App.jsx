import './App.css'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import { useState, useEffect } from 'react'; //object distructuring
import supabase from './utils/supabase';
import { SessionContext } from './contexts/SessionContext';
import Profile from './pages/Profile';

function App() {

  // state
  const [session, setSession] = useState(null)

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
  return (
    <SessionContext.Provider value={session}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </SessionContext.Provider>
  )

}
export default App;
