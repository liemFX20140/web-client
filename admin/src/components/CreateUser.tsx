import { FormEvent, useState } from 'react';

export function CreateUser() {
  const [userRoll, setUserRoll] = useState('');
  const baseurl = 'http://localhost:5000';
  const [email, setEmail] = useState('');
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (userRoll === '') {
      alert('Vui lòng chọn phân quyền người dùng');
      return;
    }
    if (email === '') {
      alert('Vui lòng điền email người dùng');
      return;
    }
    const res = await fetch(`${baseurl}/user/create`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        userRoll,
      }),
    });
    const data = await res.json();
  };
  return (
    <div className='bg-green-300 w-96  mx-auto my-48 p-4 rounded-lg'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label htmlFor='email' className='p-2 font-semibold '>
          Email
        </label>
        <input
          className='p-2 text-slate-400 rounded-md border-slate-100'
          type='email'
          id='username'
          value={email}
          placeholder='Email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <select
          className='p-2 text-slate-600 rounded-md border-slate-100'
          name='roll'
          onChange={(event) => {
            setUserRoll(event.target.value);
          }}
        >
          <option value=''>--Chọn phân quyền người dùng--</option>
          <option value='admin'>Admin</option>
          <option value='staff'>Chuyên gia</option>
          <option value='farmer'>Nông dân</option>
        </select>

        <button
          className='bg-blue-500 px-4 py-2 ml-auto my-4 w-32 rounded-lg font-bold'
          type='submit'
        >
          Tạo mới
        </button>
      </form>
    </div>
  );
}
