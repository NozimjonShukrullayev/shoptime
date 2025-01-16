'use client'

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react'
import { toast } from 'react-toastify'

interface User {
	email: string
	avatar: string
	role: string
}

interface AuthContextType {
	user: User | null
	login: (email: string, password: string) => Promise<void>
	logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const token = localStorage.getItem('access_token')
		if (token) {
			fetch('https://api.escuelajs.co/api/v1/auth/profile', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then(res => {
					if (!res.ok) throw 'Failed to fetch profile'
					return res.json()
				})
				.then(data =>
					setUser({
						...data,
					})
				)
				.catch(() => {
					localStorage.removeItem('access_token')
					setUser(null)
				})
		}
	}, [])

	// Login function
	const login = async (email: string, password: string) => {
		const res = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		})
		if (res.statusText === 'Unauthorized') {
			throw 'Please, register your account'
		} else if (!res.ok) {
			throw 'Failed to login'
		}

		const data = await res.json()
		localStorage.setItem('access_token', data.access_token)

		const profileRes = await fetch(
			'https://api.escuelajs.co/api/v1/auth/profile',
			{
				headers: {
					Authorization: `Bearer ${data.access_token}`,
				},
			}
		)
		const profileData = await profileRes.json()

		setUser({
			...profileData,
		})
	}

	// Logout function
	const logout = () => {
		toast.error("You've been logged out")
		localStorage.removeItem('access_token')
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw 'useAuth must be used within an AuthProvider'
	}
	return context
}
