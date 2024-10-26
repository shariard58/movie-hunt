# Movie Hunt 🎬

Movie Hunt is a responsive web application that lets users explore popular movies using the TMDB API. It includes features like infinite scrolling, search with debouncing, lazy loading, and dynamic data fetching.

## Demo

Check out the live demo here: [Movie Hunt on Vercel](https://movie-hunt-theta.vercel.app)

## Features

- **Popular Movies List**: Displays a list of popular movies from TMDB API.
- **Search Functionality**: Search bar with debounced API calls to minimize requests and improve performance.
- **Infinite Scrolling**: Seamless browsing experience as new movies load while scrolling.
- **Lazy Loading**: Images load on demand for optimized performance.
- **Watchlist**: Add movies to a watchlist (mocked locally).
- **Responsive Design**: Optimized for all screen sizes.
- **Interactive UI**: Smooth animations with Framer Motion.

## Pages

1. **Home Page**:  
   - Displays a list of popular movies.
   - Provides a search bar with debouncing for refined search.
   - Supports infinite scrolling and lazy loading for images.

2. **Movie Details Page**:  
   - Shows movie details, including cast, genres, and description.
   - Used animation to show Data 

3. **Watchlist Page**:  
   - Displays user's watchlist of movies (mock database).
   - Currently, data may not persist in production due to mock database but works locally.

## Technologies Used

- **Next.js** (App Router)
- **React Query** for data fetching and caching
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **React Toast** for notifications
- **Dynamic Sidebar** for navigation
- **Pagination** for getting mroe data in home page

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/shariard58/movie-hunt.git

2. nstall dependencies:
   cd movie-hunt
   npm install

3. Create a .env file based on .env.example and add your TMDB API key:
   NEXT_PUBLIC_TMDB_API_KEY=your_api_key

4.Create a .env file based on .env.example and add your TMDB API key:
  NEXT_PUBLIC_TMDB_API_KEY=your_api_key

5.Local Link 
 http://localhost:3000
  


