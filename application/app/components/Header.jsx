import { Link } from "@remix-run/react";
export default function Header() {
  return (
    <>
      <nav>
        <div className="logo-container">
          <Link to="/" className="logo"></Link>
        </div>

        <div className="client-navigation">
          <ul>
            <li>
              <Link to="/resumes">Resumes</Link>
            </li>
            <li>
              <Link to="/create">Create Resume</Link>
            </li>
            <li>
                <Link to="/login">SignUp/Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
