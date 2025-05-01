import React from 'react';

const categories = [
  {
    title: 'Trending Now',
    images: [
      'https://img.freepik.com/free-photo/vintage-movie-poster_23-2148867555.jpg',
      'https://img.freepik.com/free-photo/film-reel-closer-view_23-2148687880.jpg',
      'https://img.freepik.com/free-photo/old-movie-reel_23-2148696354.jpg',
      'https://img.freepik.com/free-photo/cinema-light-sign_23-2148770651.jpg',
      'https://img.freepik.com/free-photo/clapperboard-cinema-background_23-2148741522.jpg',
      'https://img.freepik.com/free-photo/cinema-clapperboard-director-spotlight_23-2148769287.jpg',
      'https://img.freepik.com/free-photo/movies-films-background_23-2148683885.jpg',
      'https://img.freepik.com/free-photo/popcorn-cinema-tickets_23-2148702586.jpg',
      'https://img.freepik.com/free-photo/movie-film-reel_23-2148755953.jpg',
      'https://img.freepik.com/free-photo/classic-movie-projector_23-2148740975.jpg',
    ],
  },
  {
    title: 'Top Rated',
    images: [
      'https://img.freepik.com/free-photo/film-reel-old-cinema-light_23-2148693275.jpg',
      'https://img.freepik.com/free-photo/popcorn-cinema-film-reel_23-2148780727.jpg',
      'https://img.freepik.com/free-photo/film-reel-lights-cinema_23-2148790304.jpg',
      'https://img.freepik.com/free-photo/vintage-cinema-concept-with-film-reel_23-2148744420.jpg',
      'https://img.freepik.com/free-photo/spotlight-movie-film-reel_23-2148788474.jpg',
    ],
  },
  {
    title: 'Action Movies',
    images: [
      'https://img.freepik.com/free-photo/action-movie-poster-with-glass-shards_23-2148920198.jpg',
      'https://img.freepik.com/free-photo/action-adventure-movie-poster_23-2148920201.jpg',
      'https://img.freepik.com/free-photo/cinematic-action-scene-poster-template_23-2148920203.jpg',
      'https://img.freepik.com/free-photo/action-movie-poster-with-explosions_23-2148920205.jpg',
      'https://img.freepik.com/free-photo/action-poster-of-thriller-movie_23-2148920204.jpg',
    ],
  },
  {
    title: 'Comedy Movies',
    images: [
      'https://img.freepik.com/free-photo/funny-movie-poster-template_23-2148920197.jpg',
      'https://img.freepik.com/free-photo/hilarious-movie-poster-with-characters_23-2148920200.jpg',
      'https://img.freepik.com/free-photo/comedy-film-poster-with-skydiving_23-2148920199.jpg',
      'https://img.freepik.com/free-photo/funny-cinema-poster_23-2148920202.jpg',
      'https://img.freepik.com/free-photo/comedy-poster-template-with-actors_23-2148920196.jpg',
    ],
  },
  {
    title: 'Romantic Movies',
    images: [
      'https://img.freepik.com/free-photo/romantic-film-poster-template_23-2148920170.jpg',
      'https://img.freepik.com/free-photo/romantic-comedy-poster-template_23-2148920173.jpg',
      'https://img.freepik.com/free-photo/love-story-poster-template_23-2148920172.jpg',
      'https://img.freepik.com/free-photo/sweet-romantic-movie-poster-template_23-2148920171.jpg',
      'https://img.freepik.com/free-photo/intimate-romantic-film-poster_23-2148920169.jpg',
    ],
  },
];

function Dashboard() {
  return (
    <div className="bg-black min-h-screen text-white px-6 py-8">
      <h1 className="text-3xl text-red-700 font-bold mb-8">Welcome to Netflix</h1>

      {categories.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <div className="flex overflow-x-auto gap-4 no-scrollbar">
            {section.images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${section.title} Movie ${idx}`}
                className="h-[200px] rounded hover:scale-105 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
