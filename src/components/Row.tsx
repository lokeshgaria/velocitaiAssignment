import { User } from "../constants/Interface"; 


interface RowProps {
    user: User;
  }

const TableRow = ({ user }:RowProps) => {

    let {name,email,phone,designation,status,userId}=user
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{designation}</td>
      <td>{status}</td>
      <td>{userId}</td>
    </tr>
  );
};

export default TableRow;
