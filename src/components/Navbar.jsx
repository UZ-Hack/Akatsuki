import akatsukiLogo from '../assets/akatsuki-logo.png'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <header className='border-b'>
        <nav className='flex max-w-5xl mx-auto items-center justify-between py-5'>
            <img className='w-16' src={akatsukiLogo} alt="Akatsuki Logo" />
            <form className='flex items-center border py-2 px-3 gap-1 rounded-md border-[#ccc] hover:border-black'>
                <input type="text" name='query' className='outline-none' placeholder='Serach...' />
                <BiSearch size={20} />
            </form>
        </nav>
    </header>
  )
}

export default Navbar