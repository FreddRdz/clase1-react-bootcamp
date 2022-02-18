import imageMando from "../assets/images/mandalorian.jpg";
import ContentRowMovies from "./ContentRowMovies";
import Chart from "./Chart";

const ContentRowTop = () => {
  let rowMoviesContent = [
    {
      titulo: "MOVIES IN DATA BASE",
      bordColor: "card border-left-primary shadow h-100 py-2",
      cifra: "21",
      icon: "fas fa-film fa-2x text-gray-300",
    },
    {
      titulo: "TOTAL AWARDS",
      bordColor: "card border-left-success shadow h-100 py-2",
      cifra: "79",
      icon: "fas fa-award fa-2x text-gray-300",
    },
    {
      titulo: "ACTORS QUANTITY",
      bordColor: "card border-left-warning shadow h-100 py-2",
      cifra: "49",
      icon: "fas fa-user fa-2x text-gray-300",
    },
  ];

  const changeBgColor = () => {
    let tituloGenre = document.querySelector(".fondo-caja");
    tituloGenre.classList.add("bg-secondary");
  };

  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>App Dashboard</h1>
      </div>
      <ContentRowMovies rowMoviesContent={rowMoviesContent} />
      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h5 className='m-0 font-weight-bold text-gray-800'>
                Last movie in Data Base
              </h5>
            </div>
            <div className='card-body'>
              <div className='text-center'>
                <img
                  className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                  style={{ width: "40rem" }}
                  src={imageMando}
                  alt=' Star Wars - Mandalorian '
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
              <a
                className='btn btn-danger'
                target='_blank'
                rel='nofollow'
                href='/'
              >
                View movie detail
              </a>
            </div>
          </div>
        </div>
        <div className='col-lg-6 mb-4'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h5
                onMouseOver={changeBgColor}
                className='m-0 font-weight-bold text-gray-800'
              >
                Genres in Data Base
              </h5>
            </div>
            <div className='card-body fondo-caja'>
              <div className='row'>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Acción</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Animación</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Aventura</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Ciencia Ficción</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Comedia</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Documental</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Drama</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Fantasia</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Infantiles</div>
                  </div>
                </div>
                <div className='col-lg-6 mb-4'>
                  <div className='card bg-dark text-white shadow'>
                    <div className='card-body'>Musical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default ContentRowTop;
