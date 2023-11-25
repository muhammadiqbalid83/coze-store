import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cart/cartSlice'
import { logoutUser } from '../features/user/userSlice'
import { RootState } from '../store'

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.userState.user)

  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart)
    dispatch(logoutUser)
  }
  return (
    <header className="bg-neutral py-2 ">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
        {/* users */}
        {/* links */}
      </div>
    </header>
  )
}
