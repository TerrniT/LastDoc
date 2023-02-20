import { useState } from "react";
import Admin from "./pages/Admin";
import User from "./pages/User";

export default function App() {
	const [mockAuth, setmockAuth] = useState<boolean>(true);

	return <>{mockAuth ? <Admin /> : <User />}</>;
}
