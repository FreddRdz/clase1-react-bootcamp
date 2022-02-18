import ChartRow from "./ChartRow";

const tableStyle = {
  width: "100%",
  border: "1px solid #000",
  borderRadius: "8px",
};

const thStyle = {
  border: "1px solid #000",
  padding: "8px",
};

const Chart = () => {
  let rows = [
    { id: 1, titulo: "Pelicula 1", anio: "2017" },
    { id: 2, titulo: "Pelicula 2", anio: "2017" },
    { id: 3, titulo: "Pelicula 2", anio: "2017" },
    { id: 4, titulo: "Pelicula 2", anio: "2017" },
  ];

  return (
    <div className='col-lg-6 mb-4'>
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <table style={tableStyle}>
            <tr>
              <th style={thStyle}>id</th>
              <th style={thStyle}>Titulo</th>
              <th style={thStyle}>Año</th>
            </tr>
            <tbody>
              <ChartRow rows={rows} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chart;
