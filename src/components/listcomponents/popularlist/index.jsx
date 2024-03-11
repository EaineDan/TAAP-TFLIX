

export default function PopularList({title,overview,poster_path}) {

  return (
    <>
      <div class="w-1/5 px-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <img src={poster_path} alt={title} />
          <span>{title}</span>
          <span>{overview}</span>
        </div>
      </div>
    </>
  );
}
