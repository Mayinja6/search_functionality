const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>NO.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
        </tr>

        {data.map((list) => (
          <tr key={list.id}>
            <td>{`${list.id}.`}</td>
            <td>{list.first_name}</td>
            <td>{list.last_name}</td>
            <td>{list.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
