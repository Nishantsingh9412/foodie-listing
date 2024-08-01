import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localUserData = useSelector((state) => state);
  console.log(localUserData);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  }

  return (
    <div>
      <h1>
        hnji this is profile page hai hnji
      </h1>
      <button
        className='bg-red-500 text-white p-2 rounded-md  m-5'
        onClick={() => {
          handleLogout();
        }}
      >Logout</button>
    </div>
  )
}

export default ProfilePage
