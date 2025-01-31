# Cinema Central

A comprehensive movie database application built with Next.js that provides users with access to detailed information about movies using TMDB API integration.

## Features

- Browse and search for movies
- View detailed movie information
- Server-side rendering for optimal performance
- MongoDB integration for data persistence
- API route handlers for efficient data fetching

## Tech Stack

- **Frontend Framework:** Next.js
- **Database:** MongoDB
- **API Integration:** TMDB (The Movie Database)
- **Server Features:**
  - Next.js Server Actions
  - API Route Handlers
  - Server-Side Rendering

## Prerequisites

Before you begin, ensure you have:

- Node.js installed (version 14 or higher)
- MongoDB instance (local or Atlas)
- TMDB API access token

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```plaintext
TMDB_BEARER_TOKEN=your_tmdb_token_here
MONGODB_URI=your_mongodb_connection_string
BASE_URL=your_api_route_handler_url
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AweSomeK101/cinema-central-nextjs.git
```

2. Navigate to the project directory:

```bash
cd cinema-central-nextjs
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## API Integration

This project uses the TMDB (The Movie Database) API for fetching movie data. Ensure you have:

1. Created an account on TMDB
2. Generated an API bearer token
3. Added the token to your environment variables

## Deployment

The project is configured for easy deployment on Vercel. For other platforms, follow their respective deployment guides for Next.js applications.

Live Demo: [Cinema Central](https://cinema-central.vercel.app/)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
