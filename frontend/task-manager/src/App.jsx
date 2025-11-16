
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Login from "./page/Auth/Login"
import SignUp from "./page/Auth/SignUp"
import Dashboard from './page/Admin/Dashboard'
import ManageTasks from './page/Admin/ManageTasks'
import CreateTask from './page/Admin/CreateTask'
import ManageUsers from './page/Admin/ManageUsers'
import MyTasks from './page/User/MyTasks'
import ViewTaskDetails from './page/User/ViewTaskDetails'
import UserDashboard from "./page/User/UserDashboard"
import PrivateRoute from "./routes/PrivateRoute"


function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="signUp" element={ <SignUp /> } />
          
          {/* Admim Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/* Users Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/tasks" element={<MyTasks />} />
            <Route path="/user/task-detail/:id" element={<ViewTaskDetails />} />
          
          </Route>

        </Routes>
      </Router>
    </div>
  )
}

export default App
