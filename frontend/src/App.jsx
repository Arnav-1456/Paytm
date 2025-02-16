import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>        
          <Route path="/sendmoney" element={<SendMoney/>}/>        
          <Route path="/signup" element={<Signup/>}/>        
          <Route path="/signin" element={<Signin/>}/>        
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
