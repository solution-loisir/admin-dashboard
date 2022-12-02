import { priceAccumulator } from "../utilities/price-accumulator";
import { priceFormat } from "../utilities/priceFormat";

function FinancesTable(props) {
  return (
    <table>
      <caption>Finances</caption>
      <tbody>
        <tr>
          <th>Revenu brut potentiel</th>
          <td>{priceFormat(priceAccumulator(props.state, "MaxAttendance"))}</td>
        </tr>
        <tr>
          <th>Revenu brut actuel</th>
          <td>{priceFormat(priceAccumulator(props.state, "SpotsReserved"))}</td>
        </tr>
        <tr>
          <th>Manque à gagné</th>
          <td>{priceFormat(priceAccumulator(props.state, "SpotsRemaining"))}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FinancesTable;