# Componix UI

A modern, dark-themed web application showcasing a collection of reusable, animated UI components built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **GSAP**. This project features a sleek, futuristic design with glassmorphism, parallax effects, and smooth scroll-triggered animations, ideal for developers looking to integrate customizable UI components into their projects.

## Features

- **Modern UI Design**: Dark theme with glassmorphism, gradient text, and animated backgrounds.
- **Responsive Layout**: Fully responsive across mobile, tablet, and desktop devices.
- **Animated Components**: Smooth animations using Framer Motion and GSAP, including parallax effects on the homepage.
- **Component Library**: Extensive set of reusable components (e.g., Alerts, Modals, Buttons, etc.) with code snippets.
- **Dynamic Routing**: Built with React Router for seamless navigation.
- **Interactive Forms**: Newsletter signup, contact, sign-in, and sign-up forms with validation and animations.
- **Customizable Styling**: Tailwind CSS with a custom color palette for easy theme adjustments.

## Pages

- **Home**: Hero section with parallax effect, feature highlights, component showcase, pricing tiers, testimonials, and a call-to-action.
- **About**: Mission, history, and team sections with scroll-triggered animations.
- **Components**: Library of UI components with code snippets and descriptions.
- **Pricing**: Tiered pricing plans with animated feature lists.
- **Contact**: Contact information and an animated form with validation.
- **Help**: FAQ section with collapsible answers and animations.
- **Sign In/Sign Up**: Modern forms with glassmorphism and input animations.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- A modern web browser

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bhavu7/Componix-UI.git
   cd Componix-UI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

### Build for Production

To create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
Componix-UI/
├── public/                    # Static assets
├── src/
│   ├── assets/                # Static assets imported in code
│   ├── components/            # Reusable components (Navbar, Footer, Hero, etc.)
│   │   ├── ComponentCard.jsx
│   │   ├── ContactForm.jsx
│   │   ├── FeatureCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── PricingTier.jsx
│   │   └── Testimonial.jsx
│   ├── pages/                 # Page components
│   │   ├── About.jsx
│   │   ├── Components.jsx
│   │   ├── Contact.jsx
│   │   ├── Help.jsx
│   │   ├── Home.jsx
│   │   ├── Pricing.jsx
│   │   ├── SignIn.jsx
│   │   └── SignUp.jsx
│   ├── App.jsx                # Main app with routing
│   ├── index.css              # Global styles with Tailwind CSS
│   └── main.jsx               # Entry point for React
├── vite.config.js             # Vite configuration
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation
```

## Dependencies

- **React**: Frontend framework
- **Vite**: Build tool for fast development and production builds
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **GSAP**: Animation library for scroll-triggered effects
- **React Router**: Client-side routing
- **React Icons**: Icon library for UI elements

## Customization

- **Colors**: Modify the `theme.extend.colors` section in `vite.config.js` to adjust the color palette (`primary`, `secondary`, `accent`, etc.).
- **Animations**: Update Framer Motion `variants` or GSAP timelines in component files for custom animation effects.
- **Components**: Add new components to the `Components.jsx` page by extending the `ComponentCard` component with new snippets.
- **Backend Integration**: Replace placeholder form submissions (e.g., `alert('Subscribed!')`) with API calls.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For support or inquiries, reach out via the `bhavubhoi806@gmail.com`.

---

Built with 🚀 by [Bhavesh Bhoi](https://developer-bhavesh.netlify.app/) for the Componix UI, 2025.