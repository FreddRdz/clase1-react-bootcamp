const rowStyle = {
  width: "33%",
  border: "1px solid #000",
  padding: "8px",
};

const ChartRow = ({ rows }) => {
  return (
    <>
      {rows.map((row) => (
        <tr>
          <td style={rowStyle}>{row.id}</td>
          <td style={rowStyle}>{row.titulo}</td>
          <td style={rowStyle}>{row.anio}</td>
        </tr>
      ))}
    </>
  );
};

export default ChartRow;
