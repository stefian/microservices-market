import Link from 'next/link';

export default ({ currentUser }) => {
  return <nav className="navbar nav-light bg-light">
    <Link href="/">
      <a className="navbar-brand">bazar</a>
    </Link>

    <div className="d-flex justify-content-end">
      <ul className="nav d-flex align-items-center">
        {currentUser ? 'Sign out' : 'Sign in/up'}
      </ul>
    </div>
  </nav>
};