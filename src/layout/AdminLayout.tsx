import { Outlet } from "react-router-dom"
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
        </Container>
      </Content>
    </div>
  )
}
