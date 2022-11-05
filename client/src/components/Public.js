import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Space Company message/files upload center</span></h1>
            </header>
            <main className="public__main">
                <p>This is Web Application that allow their staff to save messages or to upload files to a central server.</p>
                <address className="public__addr">
                    Space Company<br />
                    7791 Rock Maple Road<br />
                    Bronx, NY 10469<br />
                    <a href="tel:+15555555555">(555) 112-4809</a>
                </address>
                <br />
                <p>Owner: Space Company</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public