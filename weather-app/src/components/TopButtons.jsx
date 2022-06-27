function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Los Angeles",
    },
    {
      id: 2,
      title: "Toronto",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Warsaw",
    },
    {
      id: 5,
      title: "Shanghai",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6 flex-wrap">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium hover:scale-110"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
