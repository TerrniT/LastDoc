import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import "./styles/global.css"
import { ToastContainer as NotificationToast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { Provider } from "react-redux"
import { setupStore } from "../src/store/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<Provider store={setupStore}>
			<NotificationToast />
			<App />
		</Provider>
	</BrowserRouter>
)
