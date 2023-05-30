import { Link } from 'react-router-dom';
import { VscHome } from 'react-icons/vsc';
import { BsTree } from 'react-icons/bs';
export function NavBar() {
  return (
    <div className='flex bg-green-400'>
      <div className='text-lg mx-4'> Logo</div>
      <ul className='flex justify-between text-lg flex-1'>
        <li className='mx-4 flex gap-8'>
          <VscHome className='w-8 h-8'>
            <Link to={'/'}>Trang chủ</Link>
          </VscHome>
          <BsTree className='w-8 h-8'>
            <Link to={'/garden'}>Vườn cây</Link>
          </BsTree>
          <Link to={'/createuser'}>Tạo người dùng</Link>
        </li>
        <li className='mx-4'>
          <Link to={'/login'}>Đăng nhập</Link>
        </li>
      </ul>
    </div>
  );
}
