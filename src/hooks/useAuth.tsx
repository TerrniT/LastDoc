import { createContext, useContext, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage"
const AuthContext = createContext<any>("")

export const AuthProvider = ({ children }: any) => {
	const [user, setUser] = useLocalStorage("user", null)
	const navigate = useNavigate()

	const login = async (data: any) => {
		navigate("/admin")
		setUser(data)
	}

	const logout = () => {
		navigate("/")
		setUser(null)
	}

	const value = useMemo(
		() => ({
			user,
			login,
			logout,
		}),
		[user]
	)

	useEffect(() => {
		if (user) {
			navigate("/admin")
			console.log("login")
		}
	}, [user])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
	return useContext(AuthContext)
}
