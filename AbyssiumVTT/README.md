# AbyssiumVTT - Virtual Tabletop Tool

## Project Overview
AbyssiumVTT is a web-based Virtual Tabletop Tool (VTT) designed for tabletop role-playing games like Dungeons & Dragons. This application provides character sheet management, authentication, and game management features.

## Technology Stack
- **Frontend Framework**: React 19.1.0 with TypeScript
- **Build Tool**: Vite 6.3.5 for fast development and building
- **UI Framework**: Material-UI (MUI) for consistent design components
- **Routing**: React Router DOM for navigation
- **Form Management**: Formik for form handling and validation
- **HTTP Client**: Axios for API communication
- **Styling**: CSS modules and Emotion for styling

## Features
- **Landing Page**: Animated brewing potion theme welcome screen
- **Authentication**: Login and signup functionality with form validation
- **Character Sheet**: Tabbed interface for managing character information
- **Navigation**: Responsive navigation bar with routing
- **Data Management**: Structured data for weapons, tools, and character classes

## Project Structure
```
src/
├── Components/          # Reusable UI components
│   └── navbar.tsx      # Navigation bar component
├── pages/              # Page components
│   ├── landingpage.tsx # Welcome/home page
│   ├── charsheet.tsx   # Character sheet management
│   ├── charinfo.tsx    # Character information form
│   └── Authentication.tsx # Login/signup forms
├── types/              # TypeScript type definitions
│   ├── CharacterClass.ts # Character class interfaces
│   ├── Weapon.ts       # Weapon type definitions
│   └── Tool.ts         # Tool type definitions
├── data/               # Static data files
│   ├── weapons.ts      # Weapon database
│   └── tools.ts        # Tool database
├── css/                # Component-specific styles
│   ├── landingpage.css # Landing page animations
│   └── Authentication.css # Auth form styles
├── App.tsx             # Main application component
├── AppRoutes.tsx       # Route configuration
└── main.tsx           # Application entry point
```

## Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd AbyssiumVTT
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Development Workflow

### Adding New Features
1. Create new components in the `src/Components/` directory
2. Add new pages in the `src/pages/` directory
3. Define TypeScript interfaces in the `src/types/` directory
4. Add static data in the `src/data/` directory
5. Update routes in `src/AppRoutes.tsx`

### Code Standards
- Use TypeScript for type safety
- Follow Material-UI design patterns
- Use functional components with hooks
- Implement proper error handling
- Add comments for complex logic

## Future Enhancements
- Backend API integration
- Real-time multiplayer functionality
- Dice rolling mechanics
- Campaign management
- Character progression tracking
- Custom character classes and races

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License
This project is licensed under the MIT License.
