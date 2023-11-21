import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* users */}
        {/* links */}
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create account
          </Link>
        </div>
      </div>
    </header>
  )
}
