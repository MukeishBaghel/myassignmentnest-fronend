import React from 'react'
import newLogo from '/assets/images/logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, LogOut, Menu, MoveRight, X } from 'lucide-react'
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
  const [services, setServices] = React.useState<boolean>(false)
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
                      <HoveredLink to="/">Essay writing</HoveredLink>
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
                      <HoveredLink to="/">Dissertation Editing</HoveredLink>
                    </div>
                    <div className="flex flex-col text-sm">
                      <h1 className='text-xl font-semibold'>Offers</h1>
                      <HoveredLink to="/">Take My Online Exam</HoveredLink>
                      <HoveredLink to="/">Take My Online class</HoveredLink>
                      <HoveredLink to="/">Homework help</HoveredLink>
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


      {/* for mobile */}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='relative lg:hidden'
      >
        <div className='bg-primary_100 h-full gap-10 text-white flex flex-col justify-between'>
          <div className='flex items-center flex-col gap-6 justify-center h-[calc(100vh-300px)]'>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-[#dadada]" : "hover:text-secondary-100"} duration-150 ease-in  `}>Home</NavLink>
            <button className="hover:text-secondary-100 duration-150 ease-in " onClick={() => setServices(true)}>Services</button>
            <a href={'/#reviews'} className='hover:text-secondary-100 duration-150 ease-in '>
              Reviews
            </a>
            <a href={'/#freetools'} className='hover:text-secondary-100 duration-150 ease-in '>
              Free Tools
            </a></div>
          {/* <h1 className='text-2xl text-white font-semibold flex justify-between items-center mb-4 '><span>Services</span> <span onClick={() => setServices(false)} className='cursor-pointer'><ArrowRight /></span></h1> */}
          {/* {
            services ? <div className=' overflow-y-scroll no-scrollbar h-full '>
              <div className='flex items-center flex-col justify-center gap-10 overflow-y-scroll no-scrollbar h-full pt-28'>
                <div className="flex flex-col text-sm justify-center gap-1 mt-20">
                  <h1 className='text-xl font-semibold mt-5'>Writing</h1>
                  <HoveredLink className="text-white" to="/">Assignment writing</HoveredLink>
                  <HoveredLink className="text-white" to="/">Essay writing</HoveredLink>
                  <HoveredLink className="text-white" to="/">Dissertation</HoveredLink>
                  <HoveredLink className="text-white" to="/">Programming</HoveredLink>
                  <HoveredLink className="text-white" to="/">case Study</HoveredLink>
                  <HoveredLink className="text-white" to="/">Coursework</HoveredLink>
                  <HoveredLink className="text-white" to="/">Thesis Writing</HoveredLink>
                  <HoveredLink className="text-white" to="/">CDR</HoveredLink>
                  <HoveredLink className="text-white" to="/">Homework</HoveredLink>
                  <HoveredLink className="text-white" to="/">Research</HoveredLink>
                  <HoveredLink className="text-white" to="/">Assessments</HoveredLink>
                  <HoveredLink className="text-white" to="/">Speech Topics</HoveredLink>
                </div>

                <div className="flex flex-col text-sm">
                  <h1 className='text-xl font-semibold'>Offers</h1>
                  <HoveredLink className="text-white" to="/">Take My Online Exam</HoveredLink>
                  <HoveredLink className="text-white" to="/">Take My Online class</HoveredLink>
                  <HoveredLink className="text-white" to="/">Homework help</HoveredLink>
                  <HoveredLink className="text-white truncate max-w-[150px]" to="/">Pay Someone Do my Homework</HoveredLink>
                  <HoveredLink className="text-white" to="/">Coursework Help</HoveredLink>
                  <HoveredLink className="text-white" to="/">Thesis Writing help</HoveredLink>
                </div>
                <div className="flex flex-col text-sm">
                  <h1 className='text-xl font-semibold'>Editing</h1>
                  <HoveredLink className="text-white" to="/">Dissertation Editing</HoveredLink>
                </div>
              </div>

            </div> : <>
              <NavLink to={'/'} className={({ isActive }) => `${isActive ? "text-[#dadada]" : "hover:text-secondary-100"} duration-150 ease-in  `}>Home</NavLink>
              <button className="hover:text-secondary-100 duration-150 ease-in " onClick={() => setServices(true)}>Services</button>
              <a href={'/#reviews'} className='hover:text-secondary-100 duration-150 ease-in '>
                Reviews
              </a>
              <a href={'/#freetools'} className='hover:text-secondary-100 duration-150 ease-in '>
                Free Tools
              </a></>
          } */}

          {
            !token && <div className='flex justify-end  flex-col gap-2 mb-10 mx-6'>
              <Link to={'/login'} className='bg-primary text-center rounded-lg'> <Button className='gradient-text rounded-lg px-10 font-semibold py-2' >Login</Button></Link>
              <Link to={'/signup'} className='bg-primary text-center rounded-lg'><Button className='gradient-text rounded-lg px-10 font-semibold py-2'>SignUp  </Button></Link>

            </div>
          }

          {
            token && <div className='mb-10 self-center'>
              <Button className='bg-primary rounded-lg px-10 font-semibold py-2' onClick={() => {
                dispatch(logOut())
                toast.success("Logout Successfully")
              }}><span className='text-transparent bg-clip-text bg-primary_100'>Logout</span></Button>
            </div>
          }


          <button className='font-medium text-lg text-white absolute top-2 left-2 hover:opacity-65 duration-200 ease-in' onClick={toggleDrawer}><X /></button>
        </div>
      </Drawer >
    </div >
  )
}

export default Navbar