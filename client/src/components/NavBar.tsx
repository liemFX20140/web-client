import { Link } from 'react-router-dom';
import { VscHome, VscSignIn } from 'react-icons/vsc';
import { BsTree } from 'react-icons/bs';

export function NavBar() {
  return (
    <div className='flex mx-auto p-3 lg:p-5 container'>
      <div className='text-xl mx-4 '>Logo </div>
      <ul className='flex justify-between text-lg flex-1'>
        <li className='mx-4 flex gap-8'>
          <Link to={'/'} className='flex gap-2'>
            <VscHome className='lg:w-8 lg:h-8 w-6 h-6'></VscHome>
            <span className='lg:inline-block hidden'>Trang chủ</span>
          </Link>

          <Link to={'/garden'} className='flex gap-2'>
            <BsTree className='lg:w-8 lg:h-8 w-6 h-6'></BsTree>
            <span className='lg:block hidden'>Vườn cây</span>
          </Link>
        </li>
        <li className='mx-4'>
          <Link to={'/login'} className='flex gap-2'>
            <VscSignIn className='lg:w-8 lg:h-8 w-6 h-6'></VscSignIn>
            <span className='hidden lg:block'>Đăng nhập</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
