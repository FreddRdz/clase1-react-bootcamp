import ChartRow from "./ChartRow";
import { Component } from "react";

const tableStyle = {
  width: "100%",
  border: "1px solid #000",
  borderRadius: "8px",
};

const thStyle = {
  border: "1px solid #000",
  padding: "8px",
};

// const URL = "http://www.omdbapi.com/?i=tt3896198&apikey=2cd9724f";

class Chart extends Component {
  constructor() {
    super();
    this.state = {
      arrayPeliculas: [
        {
          title: "Guardians of the Galaxy Vol. 2",
          year: "2017",
          imdbID: "tt3896198",
        },
        {
          title: "The Lord of the Rings: The Fellowship of the Ring",
          year: "2001",
          imdbID: "tt0120737",
        },
        { title: "The Avengers", year: "2012", imdbID: "tt0848228" },
        { title: "Breaking Bad", year: "2008", imdbID: "tt0903747" },
        {
          title: "Star Wars: Episode IV - A New Hope",
          year: "1977",
          imdbID: "tt0076759",
        },
      ],
    };
  }

  render() {
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
                <ChartRow rows={this.state.arrayPeliculas} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Chart;
