function SpotsTable(props) {
  return (
    <table>
      <caption>Places disponibles</caption>
      <tbody>
        <tr>
          <th>Places offertes</th>
          <td>{props.total}</td>
          <td>100%</td>
        </tr>
        <tr>
          <th>Places restantes</th>
          <td>{props.left}</td>
          <td>{`${Math.round(props.left / props.total * 100)}%`}</td>
        </tr>
        <tr>
          <th>Places réservées</th>
          <td>{props.taken}</td>
          <td>{`${Math.round(props.taken / props.total * 100)}%`}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SpotsTable;