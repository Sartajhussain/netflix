import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      // Organize into 3 fake categories
      const trending = data.slice(0, 10);
      const topRated = data.slice(0, 10);
      const electronics = data.slice(0, 20);

      const formatted = [
        { title: 'Trending Now', items: trending },
        { title: 'Top Rated', items: topRated },
        { title: 'Electronics', items: electronics },
      ];

      setCategories(formatted);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load content.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-6 py-8">
      <h1 className="text-3xl text-red-700 font-bold mb-8">Welcome to My Movie App</h1>

      {error && <p className="text-red-500">{error}</p>}

      {categories.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            {section.items.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className="h-[200px] rounded hover:scale-105 transition-all duration-300 object-contain bg-white p-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
