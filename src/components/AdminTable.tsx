import React, { useState } from 'react';
import Row from './Row';
import '../styles/Adminstyles.css';
import {AdminData} from "../constants/data"
import {User} from "../constants/Interface"
const AdminTable = () => {
  const [search, setSearch] = useState('');

  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredUsers = AdminData.filter((user:User) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.phone.toLowerCase().includes(search.toLowerCase()) ||
      user.designation.toLowerCase().includes(search.toLowerCase()) ||
      user.status.toLowerCase().includes(search.toLowerCase()) ||
      user.userId.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className='section'>
      <h1>Admin Table</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchChange}
      />
      <table className="admin-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Designation</th>
            <th>Access Status</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length !=0 ? filteredUsers.map((user) => (
            <Row key={user.userId} user={user} />
          )) : <p>No data found !</p>}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
