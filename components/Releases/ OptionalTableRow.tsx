import type { TableRowInfo } from "./types";

const OptionalTableRow = ({ label, value }: TableRowInfo) =>
  value ? (
    <tr style={{ borderBottom: "solid 1px lightgrey" }}>
      <td style={{ fontWeight: "bold", padding: "8px 12px 8px 0" }}>
        {label}:
      </td>
      <td style={{ padding: "8px 12px 8px 0" }}>{value} </td>
    </tr>
  ) : null;

export default OptionalTableRow;
