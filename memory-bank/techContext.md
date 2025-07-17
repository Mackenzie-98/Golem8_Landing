# Technical Context: Agencia LATAM Landing Page

## Technology Stack

### Core Framework
- **Next.js 15.2.4**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Full type safety and development experience

### UI & Styling
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Shadcn/ui**: Component library built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Framer Motion**: Animation library for smooth interactions
- **Lucide React**: Consistent icon library

### Development Tools
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Automatic vendor prefixing

## Dependencies Analysis

### Core Dependencies
```json
{
  "next": "15.2.4",
  "react": "^19",
  "react-dom": "^19",
  "typescript": "^5"
}
```

### UI Component Dependencies
```json
{
  "@radix-ui/react-*": "Various versions",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.5",
  "tailwindcss-animate": "^1.0.7"
}
```

### Animation & Interaction
```json
{
  "framer-motion": "latest",
  "embla-carousel-react": "8.5.1",
  "lucide-react": "^0.454.0"
}
```

### Form Management
```json
{
  "react-hook-form": "^7.54.1",
  "@hookform/resolvers": "^3.9.1",
  "zod": "^3.24.1"
}
```

## Development Setup

### Prerequisites
- Node.js 18+ (recommended: LTS version)
- npm, pnpm, or yarn package manager
- Git for version control

### Installation Commands
```bash
# Install dependencies
npm install
# or
pnpm install

# Development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or
pnpm build

# Start production server
npm start
# or
pnpm start
```

### Environment Configuration
- **Development**: `next dev` (port 3000)
- **Production**: `next build && next start`
- **Linting**: `next lint`

## Configuration Files

### Next.js Configuration (`next.config.mjs`)
```javascript
// Configuration includes:
// - ESLint and TypeScript build optimizations
// - Image optimization settings
// - Cloudflare tunnel support with allowedDevOrigins
```

### Tailwind Configuration (`tailwind.config.ts`)
- Custom color palette
- Extended spacing scale
- Animation configurations
- Component-specific utilities

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- Path aliases for clean imports
- Next.js-specific settings

### PostCSS Configuration (`postcss.config.mjs`)
- Tailwind CSS processing
- Autoprefixer integration

## Build & Deployment

### Build Process
1. **TypeScript Compilation**: Type checking and compilation
2. **CSS Processing**: Tailwind compilation and optimization
3. **Bundle Optimization**: Next.js automatic optimization
4. **Asset Optimization**: Image and font optimization

### Deployment Considerations
- **Static Export**: Potential for static hosting
- **Server-side Rendering**: Dynamic content capabilities
- **API Routes**: Backend integration possibilities
- **Environment Variables**: Configuration management

## Technical Constraints

### Performance Requirements
- **First Contentful Paint**: < 1.5 seconds
- **Largest Contentful Paint**: < 2.5 seconds
- **Cumulative Layout Shift**: < 0.1
- **Mobile Performance**: Optimized for mobile-first experience

### Browser Support
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

### Accessibility Standards
- **WCAG 2.1 AA**: Compliance target
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA attributes
- **Color Contrast**: AA compliance

## Integration Points

### Automation Workflows
- **n8n Integration**: Structured data output for workflows
- **API Endpoints**: Next.js API routes for external integrations
- **Webhook Support**: Ready for automation trigger points

### Analytics & Monitoring
- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Production error monitoring
- **User Analytics**: Conversion tracking capabilities

### Future Considerations
- **CMS Integration**: Potential headless CMS addition
- **Authentication**: User account management
- **Database Integration**: Lead management system
- **Email Marketing**: Newsletter and drip campaigns 