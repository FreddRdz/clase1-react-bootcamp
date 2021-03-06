import { SmallCard } from "./SmallCard";

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
      {rowMoviesContent.map((rowMovie, i) => (
        <SmallCard {...rowMovie} key={i} />
      ))}
    </div>
  );
};

export default ContentRowMovies;
