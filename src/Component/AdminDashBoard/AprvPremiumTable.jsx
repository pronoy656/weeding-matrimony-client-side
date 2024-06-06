const AprvPremiumTable = ({ premium, index }) => {
  const { email, Name } = premium;
  return (
    <div>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>{Name}</td>
        <td>
          <button className="btn btn-md bg-yellow-400">Make Premium</button>
        </td>
      </tr>
    </div>
  );
};

export default AprvPremiumTable;
