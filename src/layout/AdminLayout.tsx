import { Outlet } from "react-router-dom"
import Container from "../components/Container"
import Content from "../components/Content"
import Navbar from "../components/Navbar"
import Options from "../components/Options"
import Sidebar from "../components/Sidebar"
import Space from "../components/Space"
import Subhead from "../components/Subhead"
import Title from "../components/Title"

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
