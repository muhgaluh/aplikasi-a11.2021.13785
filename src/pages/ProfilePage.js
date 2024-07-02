import React from 'react';
import Profile from '../components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';

function ProfilePage() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const handleNameChange = (e) => {
      dispatch({
        type: 'SET_USER',
        payload: { ...user, name: e.target.value }
      });
    };
  
    const handleNimChange = (e) => {
      dispatch({
        type: 'SET_USER',
        payload: { ...user, nim: e.target.value }
      });
    };
  
    return (
        <div className="container">
            <p className="display-4">Profile</p>
            <p className="lead">Welcome to the Profile page!</p>

            <Profile name={user.name} nim={user.nim} />
            <div className="container mt-3">
                <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">Nama:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        value={user.name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nimInput" className="form-label">NIM:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nimInput"
                        value={user.nim}
                        onChange={handleNimChange}
                    />
                </div>
            </div>
        </div>
  );
}

export default ProfilePage;