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

const ContentRowMovies = () => {
  return (
    <div className='row'>
      {rowMoviesContent.map((rowMovie) => (
        <div className='col-md-4 mb-4'>
          <div className={rowMovie.bordColor}>
            <div className='card-body'>
              <div className='row no-gutters align-items-center'>
                <div className='col mr-2'>
                  <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                    {rowMovie.titulo}
                  </div>
                  <div className='h5 mb-0 font-weight-bold text-gray-800'>
                    {rowMovie.cifra}
                  </div>
                </div>
                <div className='col-auto'>
                  <i className={rowMovie.icon}></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContentRowMovies;
