# System Patterns: Agencia LATAM Landing Page

## Architecture Overview

### Application Structure
```
agencia-latam-landing/
├── app/                    # Next.js 13+ App Router
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   ├── case-studies/      # Case studies section
│   └── pricing/           # Pricing section
├── components/            # Reusable UI components
│   ├── ui/               # Shadcn/ui components
│   └── team-section.tsx  # Custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── styles/               # Global styles
```

### Design System Foundation
- **Component Library**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React for consistent iconography
- **Typography**: Custom font stack optimized for readability

## Key Design Patterns

### 1. Component Composition
- **UI Components**: Atomic design principles with Shadcn/ui
- **Layout Components**: Flexible, responsive grid systems
- **Interactive Components**: Consistent animation patterns

### 2. State Management
- **Form State**: React Hook Form for complex multi-step forms
- **UI State**: useState for component-level state
- **Global State**: Context API for theme management

### 3. Animation Strategy
- **Framer Motion**: Consistent animation library
- **Fade-in Patterns**: Standardized entrance animations
- **Stagger Effects**: Sequential animations for lists/grids
- **Scroll-triggered**: Intersection Observer for performance

### 4. Responsive Design
- **Mobile-first**: Tailwind's responsive utilities
- **Flexible Layouts**: CSS Grid and Flexbox combinations
- **Touch-friendly**: Appropriate tap targets and gestures

## Technical Decisions

### Performance Optimization
- **Next.js 15**: Latest features and optimizations
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router
- **Client-side State**: Minimal to reduce bundle size

### Development Experience
- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Tailwind**: Utility-first CSS approach
- **Component Library**: Consistent UI patterns

### Integration Patterns
- **Form Handling**: Structured data capture for n8n workflows
- **API Routes**: Next.js API routes for backend integration
- **Webhook Ready**: Structured for automation integration

## Component Architecture

### Core Components
1. **Hero Section**: Value proposition + primary CTA
2. **Services Grid**: Three-column service showcase
3. **Benefits Section**: Problem/solution presentation
4. **Social Proof**: Testimonials and case studies
5. **Team Section**: Agency credibility building
6. **Contact Forms**: Multi-step lead capture

### UI Component Hierarchy
```
Page Components (app/)
├── Layout Components
│   ├── Header/Navigation
│   ├── Footer
│   └── Floating CTAs
├── Section Components
│   ├── Hero
│   ├── Services
│   ├── Benefits
│   ├── Testimonials
│   └── Team
└── Form Components
    ├── Multi-step Forms
    ├── Contact CTAs
    └── Validation Logic
```

## Data Flow Patterns

### Form Submission Flow
1. **Client Validation**: Real-time form validation
2. **State Management**: Step-by-step form progression
3. **Data Preparation**: Structure for automation workflows
4. **Submission**: API route handling
5. **Response**: User feedback and next steps

### Animation Coordination
1. **Entrance Effects**: Coordinated fade-in animations
2. **User Interactions**: Hover and click feedback
3. **Scroll Animations**: Performance-optimized triggers
4. **Loading States**: Smooth transitions during form submission

## Security & Performance

### Security Considerations
- **Form Validation**: Client and server-side validation
- **Data Sanitization**: Input cleaning before processing
- **CSRF Protection**: Built-in Next.js protections

### Performance Monitoring
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Bundle Analysis**: Regular size monitoring
- **Image Optimization**: Automatic Next.js handling
- **Caching Strategy**: Static generation where possible 