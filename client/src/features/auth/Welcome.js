import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'

const Welcome = () => {

    const { username,isManager, isEmployee, isAdmin } = useAuth()

    useTitle(`Space Company: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>

            {(isManager || isEmployee) && <p><Link to="/dash/notes">View message and files</Link></p>}

            {(isManager || isEmployee) && <p><Link to="/dash/notes/new">Add New message and files</Link></p>}

            {(isAdmin) && <p><Link to="/dash/users">View Staff Members Settings</Link></p>}

            {(isAdmin) && <p><Link to="/dash/users/new">Add New Staff Members</Link></p>}

        </section>
    )

    return content
}
export default Welcome