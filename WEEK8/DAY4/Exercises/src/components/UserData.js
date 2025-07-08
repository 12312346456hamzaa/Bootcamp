import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../features/userSlice';

const UserData = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>User Information</h2>
      {data && (
        <ul>
          <li><strong>Name:</strong> {data.name}</li>
          <li><strong>Email:</strong> {data.email}</li>
          <li><strong>Phone:</strong> {data.phone}</li>
        </ul>
      )}
    </div>
  );
};

export default UserData;
