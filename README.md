College Discovery Platform

A modern College Discovery Platform built using Next.js, TypeScript, and Tailwind CSS. The application helps students explore, compare, and discover engineering colleges based on placements, fees, rankings, and other academic metrics.

Features

Home Page

- Search colleges by name
- Dynamic statistics dashboard
- Quick navigation
- Compare college selection

College Listing

- Search colleges
- Filter by region
- Filter by tier
- Sort by rating
- Sort by fees
- Sort by NIRF rank
- Sort by placement package

College Details

- College information
- Fees structure
- Placement package
- NIRF ranking
- Campus information
- Establishment year
- Branch information

College Comparison

- Side-by-side comparison
- Placement comparison
- Fee comparison
- Rating comparison
- NIRF comparison

Recommendation System

- Budget-based recommendations
- College ranking suggestions

Tech Stack

Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS

Data Layer

- TypeScript Dataset
- Static College Records

Project Structure

app/
├── page.tsx
├── colleges/page.tsx
├── college/[id]/page.tsx
├── compare/page.tsx
└── recommend/page.tsx

components/
└── CollegeCard.tsx

data/
└── colleges.ts

Installation

git clone <repository-url>
cd college-discovery-platform
npm install

Run Development Server

npm run dev -- --webpack

Open:

http://localhost:3000

Sample Features Demonstrated

- College Search Engine
- College Comparison System
- Recommendation Engine
- Dynamic Ranking Display
- Responsive UI Design

Future Enhancements

- PostgreSQL Integration
- Prisma ORM
- Authentication System
- Review System
- Bookmark Feature
- Multi-language Support
- AI-Based College Recommendation
- CSV Data Import
- Admin Dashboard

Author

Ganta Srinivasa Rao

B.Tech Computer Science & Engineering

Ramachandra College of Engineering

License

MIT License
