import { useEffect, useState } from 'react'
import './App.css'
import InviteForm from './component/InviteForm'
import Login from './component/Login'
import Sidebar from './component/Sidebar'
import Topbar from './component/Topbar'

function App() {
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("entra_user"));

  // Handle login success from Login component
  const handleLogin = () => {
    setIsLogged(true);
  };

  return (
    <div>
      {
        !isLogged ? (
          <Login onLoginSuccess={handleLogin} />
        ) : (
          <div className="app-layout" style={{ display: "flex", height: "100vh" }}>
            <Sidebar />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Topbar />
              <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
                <InviteForm />
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App;
