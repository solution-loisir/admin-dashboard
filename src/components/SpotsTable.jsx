function SpotsTable(props) {
  return (
    <table>
      <caption>Places disponibles</caption>
      <tbody>
        <tr>
          <th>Total des places offertes</th>
          <td>{props.total}</td>
        </tr>
        <tr>
          <th>Total des places restantes</th>
          <td>{props.left}</td>
        </tr>
        <tr>
          <th>Total des places réservées</th>
          <td>{props.taken}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SpotsTable;