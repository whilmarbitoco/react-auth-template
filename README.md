# React Auth Template

This is a simple React template for setting up authentication in a React application. The template includes a basic structure with routes, context, hooks, and pages for login and home views. It's designed to be easy to integrate into any React project that requires user authentication.

## Features

- **Login Page**: A page where users can authenticate.
- **Home Page**: A page for authenticated users after they log in.
- **Context & Hooks**: A custom authentication context and hooks to manage user authentication state.
- **Route Guard**: A route protection mechanism that ensures only authenticated users can access certain pages.

## Project Structure

```
src/
├── App.jsx            # Main application component
├── assets
│   └── react.svg      # Logo or other assets
├── components
│   └── pages
│       ├── HomePage.jsx # Home page component (protected)
│       └── LoginPage.jsx # Login page component
├── index.css          # Global styles
├── main.jsx           # Entry point for the application
├── routes
│   ├── MyRoutes.jsx   # Defines routes for the app
│   └── RouteGuard.jsx # Protects routes based on authentication status
└── utils
    ├── context
    │   └── Context.jsx # Auth context to manage user state
    ├── hooks
    │   └── useAuth.jsx # Custom hook for authentication logic
    └── provider
        └── Provider.jsx # Provides the Auth context to the app
```

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/whilmarbitoco/react-auth-template.git
   cd react-auth-template
   ```

2. **Install dependencies**:

   If you don't have the dependencies installed yet, run:

   ```bash
   npm install
   ```

3. **Run the application**:

   To start the development server, run:

   ```bash
   npm run dev
   ```

4. **Access the app**:

   The app should now be running at `http://localhost:5137`.

## Components & Structure

- **App.jsx**: Main entry point of the application where routing and layout are defined.
- **HomePage.jsx**: Displays after login. Only accessible to authenticated users.
- **LoginPage.jsx**: Allows users to log in. Upon successful login, the user is redirected to the HomePage.
- **MyRoutes.jsx**: Defines the routing logic and the pages that can be accessed.
- **RouteGuard.jsx**: Ensures only authenticated users can access protected routes.
- **Context.jsx**: Provides authentication state to the rest of the app.
- **useAuth.jsx**: A custom hook to manage user authentication logic
- **Provider.jsx**: Wraps the app with the authentication context.

## Customization

- **Authentication Logic**: Modify the `useAuth` hook and `Context.jsx` to integrate with your own authentication API or method.
- **Pages**: You can customize the `HomePage` and `LoginPage` to suit your needs. Add more protected pages as necessary.
- **Route Guard**: Update the `RouteGuard` to protect additional routes or modify its behavior for different authentication states.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
