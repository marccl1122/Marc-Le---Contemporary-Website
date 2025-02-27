# Marc Le - Contemporary Website Documentation

## Project Overview
A modern portfolio website built with Next.js 14, showcasing photography, digital art, writing, and podcasts. The site features a minimalist design with interactive elements and dynamic content management.

## Technical Stack

### Core Technologies
- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe code development
- **TailwindCSS**: Utility-first CSS framework
- **React Server Components**: For improved performance
- **API Routes**: For serverless functions

### Dependencies
```json
{
  "next": "14.1.0",
  "react": "^18",
  "react-dom": "^18",
  "typescript": "^5",
  "tailwindcss": "^3",
  "framer-motion": "For animations",
  "lucide-react": "Icon library",
  "next-themes": "Dark/light theme support"
}
```

## Project Structure

### Directory Layout
```
app/
├── components/         # Reusable UI components
│   ├── ui/            # Base UI components
│   └── [component].tsx
├── lib/               # Utility functions and constants
├── api/               # API routes
└── [section]/         # Page routes
    └── page.tsx
```

### Key Components

#### 1. Theme System (`components/theme-provider.tsx`)
- Uses `next-themes` for dark/light mode
- Persists theme preference
- Provides theme context to all components

#### 2. 3D Background (`components/hero-3d.tsx`)
- Canvas-based particle network
- Responsive to viewport size
- Performance optimized with `requestAnimationFrame`
- Adjusts opacity based on theme

#### 3. Navigation (`components/header.tsx`)
- Responsive design
- Theme toggle integration
- Scroll-aware transparency
- Minimalist interface

#### 4. Newsletter System (`components/newsletter-subscription.tsx`)
- Form handling with validation
- API integration (`/api/subscribe/route.ts`)
- Toast notifications for feedback
- Error handling

#### 5. Content Pages
- **Gallery**: Grid layout with lightbox
- **Canvas**: WebGL experiments
- **Writing**: Dynamic blog routing
- **Podcast**: Audio player integration

## State Management
- React hooks for local state
- Context API for theme
- No external state library needed due to minimal state requirements

## Styling Architecture
```css
/* Global Styles */
app/globals.css        # Base styles and Tailwind imports
tailwind.config.js     # Theme customization
postcss.config.mjs     # PostCSS configuration
```

### Tailwind Configuration
- Custom color schemes
- Extended typography settings
- Responsive breakpoints
- Animation utilities

## API Routes

### Newsletter Subscription
```typescript
POST /api/subscribe
Body: { email: string }
Response: { success: boolean, message: string }
```

## Performance Optimizations
1. Image optimization with Next.js Image component
2. Code splitting and lazy loading
3. Server components for reduced client-side JS
4. Optimized fonts with `next/font`
5. Minimal third-party dependencies

## Development Guidelines

### Component Creation
1. Use TypeScript interfaces for props
2. Implement proper error boundaries
3. Follow atomic design principles
4. Include JSDoc comments for complex logic

### Styling Conventions
1. Use Tailwind utility classes
2. Follow mobile-first approach
3. Maintain consistent spacing scale
4. Use CSS variables for theme values

### Code Organization
1. Group related components
2. Separate business logic from UI
3. Use constants for repeated values
4. Maintain type definitions

## Deployment Preparation

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_API_URL=
NEWSLETTER_API_KEY=
```

### Build Process
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

### Deployment Checklist
1. Verify all environment variables
2. Run build process locally
3. Test all interactive features
4. Check responsive layouts
5. Validate form submissions
6. Test theme switching
7. Verify API endpoints
8. Check meta tags and SEO
9. Validate accessibility
10. Test performance metrics

### Recommended Hosting
- Vercel (optimal for Next.js)
- Netlify (alternative option)
- AWS Amplify (for custom infrastructure)

## Maintenance

### Regular Tasks
1. Update dependencies monthly
2. Monitor API endpoint performance
3. Check analytics and error logs
4. Update content sections
5. Backup database (if added later)

### Troubleshooting
1. Check browser console for errors
2. Verify API responses
3. Test in different browsers
4. Check mobile responsiveness
5. Validate form submissions

## Future Considerations
1. Content Management System integration
2. Analytics implementation
3. SEO optimization
4. Performance monitoring
5. Automated testing setup

## Security Considerations
1. API rate limiting
2. Form validation
3. CORS policies
4. Content Security Policy
5. HTTP security headers

This documentation provides a comprehensive overview of the project's technical aspects. For specific implementation details, refer to the inline comments in the respective files.
