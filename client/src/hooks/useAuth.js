import { useSelector } from 'react-redux'
import { selectCurrentToken } from "../features/auth/authSlice"
import jwtDecode from 'jwt-decode'

const useAuth = () => {
    const token = useSelector(selectCurrentToken)
    let isEmployee = false
    let isManager = false
    let isAdmin = false
    let status = "Employee"

    if (token) {
        const decoded = jwtDecode(token)
        const { username, roles } = decoded.UserInfo

        isEmployee = roles.includes('Employee')
        isManager = roles.includes('Manager')
        isAdmin = roles.includes('Admin')

        if (isEmployee) status = "Employee"
        if (isManager) status = "Manager"
        if (isAdmin) status = "Admin"

        return { username, roles, status, isEmployee, isManager, isAdmin }
    }

    return { username: '', roles: [], isEmployee, isManager, isAdmin, status }
}
export default useAuth