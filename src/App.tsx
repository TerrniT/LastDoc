import "@tremor/react/dist/esm/tremor.css"
import { Route, Routes, Link } from "react-router-dom"
import { Login, Profile, User, Admin, NotFound, Settings } from "./pages/index"
import { AdminLayout, UserLayout } from "./layout"

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<User />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path='/admin/profile' element={<Profile />} />
          <Route path='/admin/settings' element={<Settings />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}
