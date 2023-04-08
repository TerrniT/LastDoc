import { Outlet } from "react-router-dom"
import AddNewDocModal from "../components/add-new-doc/AddNewDocModal"
import Container from "../components/Container"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function AdminLayout() {
  return (
    <div className='flex max-h-screen'>
      <Sidebar />
      <Content>
        <Navbar role='admin' />
        <Container>
          <Outlet />

          <AddNewDocModal />
        </Container>
      </Content>
    </div>
  )
}
