import useUser from "../Hooks/useUser";
import ManageUsersTable from "./ManageUsersTable";

const ManageUsers = () => {
  const [allUsers] = useUser();
  return (
    <div>
      <h1 className="text-3xl font-bold text-purple-600">
        Allusers: {allUsers.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-[1080px] border">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
            </tr>
          </thead> */}
          {allUsers.map((users, index) => (
            <ManageUsersTable
              key={users._id}
              users={users}
              index={index}
            ></ManageUsersTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
