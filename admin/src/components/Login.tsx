import { type FormEvent, useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseurl = 'http://localhost:5000';
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log('username:', username, 'password:', password);
    const res = await fetch(`${baseurl}/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <div className='bg-green-300 w-96  mx-auto my-48 p-4 rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        <label className='mr-auto p-2 font-semibold '>Email</label>
        <input
          className='p-2 text-slate-400 rounded-md'
          type='text'
          id='username'
          value={email}
          placeholder='Tên đăng nhập'
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor='password' className='p-2 font-semibold mr-auto '>
          Mật khẩu:
        </label>
        <input
          className='p-2 text-slate-400 rounded-md'
          placeholder='Mật khẩu'
          type='password'
          id='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className='bg-blue-500 px-4 py-2 ml-auto my-4 w-32 rounded-lg font-bold'
          type='submit'
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
