import Header from './Header'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
   <div className='bg-gradient-to-t from-cyan-300 to-sky-100'>
        <Header />
        <div className='min-h-screen mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20 bg-gradient-to-t from-cyan-500 via-sky-300 to-blue-100'>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout
