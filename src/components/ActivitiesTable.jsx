function ActivitiesTable(props) {
  return (
    <table>
      <caption>Statistiques des cours</caption>
      <tbody>
        <tr>
          <th>Cours complets</th>
          <td>{props.full}</td>
        </tr>
        <tr>
          <th>Cours avec places</th>
          <td>{props.available}</td>
        </tr>
        <tr>
          <th>Nombre total de cours</th>
          <td>{props.total}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ActivitiesTable;