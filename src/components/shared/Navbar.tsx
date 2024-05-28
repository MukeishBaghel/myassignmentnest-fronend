import React from 'react'
import newLogo from '/assets/images/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { NavItems } from '../../constants/NavItems'
import { LogOut, Menu, X } from 'lucide-react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { logOut, selectCurrentUser } from '../../redux/slices/user.slice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Button from '../inputs/Button'
import { HoveredLink, MenuItem, Menu as NavMenu } from './navbar/NavbarMenu'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [active, setActive] = React.useState<string | null>(null);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const { token } = useSelector(selectCurrentUser);
  const dispatch = useDispatch()
  return (
    <div>
      <header className='bg-primary_100 relative text-primary py-1 text-sm flex items-center justify-between md:justify-center gap-4 sm:gap-8 px-2'>
        <div className='bg- rounded-2xl bg-secondary border border-primary py-1.5 w-fit text-sm font-semibold px-2'>Limited time Discount</div>
        <h1 className='text-sm max-md:hidden'><span className='font-bold'>20% OFF</span> - For first time user</h1>
        <h2 className='font-semibold max-md:hidden'>USE CODE - <span className='font-bold text-base'> FIRSTIMER007</span></h2>
        <div className='bg-primary rounded-2xl border-2 border-secondary py-1 w-fit text-sm font-semibold px-4 text-secondary'>Claim now</div>
      </header>
      <nav className=' bg-primary shadow-Nav_box_Shadow py-2'>
        <div className='px-4 container lg:px-20  flex items-center justify-between'>
          <Link to={'/'}><img src={newLogo} alt="assignmentHelper" className='w-36 ' /></Link>
          {/* <h1 className='text-xl lg:text-2xl text-[#1F1F1F]'>AssignmentHelper</h1> */}
          <ul className=' hidden lg:flex items-center justify-between gap-8 text-[#454545] text-lg xl:text-xl'>
            {/* <button className="hover:text-[#7633FF99] duration-150 ease-in " >Services</button> */}

            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "gradient-text" : "hover:text-[#7633FF99]"} duration-150 ease-in `}>Home</NavLink>

            <div className=''>
              <NavMenu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Services">
                  <div className='grid grid-cols-3 gap-4'>
                    <div className="flex flex-col text-sm">
                      <h1 className='text-xl font-semibold'>Writing</h1>
                      <HoveredLink to="/">Assignment writing</HoveredLink>
                      <HoveredLink to="/-design">Essay writing</HoveredLink>
                      <HoveredLink to="/">Dissertation</HoveredLink>
                      <HoveredLink to="/">Programming</HoveredLink>
                      <HoveredLink to="/">case Study</HoveredLink>
                      <HoveredLink to="/">Coursework</HoveredLink>
                      <HoveredLink to="/">Thesis Writing</HoveredLink>
                      <HoveredLink to="/">CDR</HoveredLink>
                      <HoveredLink to="/">Homework</HoveredLink>
                      <HoveredLink to="/">Research</HoveredLink>
                      <HoveredLink to="/">Assessments</HoveredLink>
                      <HoveredLink to="/">Speech Topics</HoveredLink>
                    </div>
                    <div className="flex flex-col text-sm">
                      <h1 className='text-xl font-semibold'>Editing</h1>
                      <HoveredLink to="/web-dev">Dissertation Editing</HoveredLink>
                    </div>
                    <div className="flex flex-col text-sm">
                      <h1 className='text-xl font-semibold'>Offers</h1>
                      <HoveredLink to="/">Take My Online Exam</HoveredLink>
                      <HoveredLink to="/">Take My Online class</HoveredLink>
                      <HoveredLink to="/seo">Homework help</HoveredLink>
                      <HoveredLink to="/">Pay Someone Do my Homework</HoveredLink>
                      <HoveredLink to="/">Coursework Help</HoveredLink>
                      <HoveredLink to="/">Thesis Writing help</HoveredLink>
                    </div>
                  </div>
                </MenuItem>
              </NavMenu>
            </div>

            <a href={'/#reviews'} className='hover:text-[#7633FF99] duration-150 ease-in '>
              Reviews
            </a>
            <a href={'/#freetools'} className='hover:text-[#7633FF99] duration-150 ease-in '>
              Free Tools
            </a>
            {
              !token && <div className='space-x-1 text-[#454545] text-lg xl:text-xl'>
                <Link to={'/login'} className='active:scale-95 hover:text-purple-700 duration-150 ease-in '>Login</Link>
                <span>/</span>
                <Link to={'/signup'} className='hover:text-purple-700 duration-150 ease-in '>SignUp</Link>
              </div>
            }

            {
              token && <button onClick={() => {
                dispatch(logOut())
                toast.success("Logout Successfully")
              }}><LogOut className='w-7 h-7' /></button>
            }
          </ul>
          <button className='lg:hidden cursor-pointer' onClick={toggleDrawer}>
            <Menu className='w-7 h-7' />
          </button>
        </div>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='relative lg:hidden'
      >
        <div className='bg-primary_100 h-full flex flex-col items-center justify-center gap-10 text-white'>
          <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-[#dadada]" : "hover:text-secondary-100"} duration-150 ease-in mt-24 `}>Home</NavLink>
          <button className="hover:text-secondary-100 duration-150 ease-in ">Services</button>
          <a href={'/#reviews'} className='hover:text-secondary-100 duration-150 ease-in '>
            Reviews
          </a>
          <a href={'/#freetools'} className='hover:text-secondary-100 duration-150 ease-in '>
            Free Tools
          </a>
          {
            token && <div className='flex justify-end h-full flex-col gap-2 mb-10'>
              <Button className='bg-primary rounded-lg px-10 font-semibold py-2' onClick={() => {
                dispatch(logOut())
                toast.success("Logout Successfully")
              }}><span className='text-transparent bg-clip-text bg-primary_100'>Logout</span></Button>
            </div>
          }

          {
            !token && <div className='flex justify-end h-full flex-col gap-2 mb-10'>
              <Button className='bg-primary rounded-lg px-10 font-semibold py-2' ><Link to={'/login'} className='text-transparent bg-clip-text bg-primary_100'>Login</Link></Button>
              <Button className='bg-primary rounded-lg px-10 font-semibold py-2'><Link to={'/signup'} className='text-transparent bg-clip-text bg-primary_100'>SignUp</Link>
              </Button>
            </div>
          }


          <button className='font-medium text-lg text-white absolute top-2 left-2 hover:opacity-65 duration-200 ease-in' onClick={toggleDrawer}><X /></button>
        </div>
      </Drawer >
    </div >
  )
}

export default Navbar