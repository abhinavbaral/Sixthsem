
// Direct exports from pages/ root
export { default as Home } from './Home';

// Exports from Customer/ subfolder (customer-specific pages)
export { default as Profile } from './Customer/Profile';
export { default as Orders } from './Customer/Orders';
export { default as CartPage } from './Customer/CartPage';

// Exports from Admin/ subfolder (admin-specific pages)
export { default as AdminDashboardPage } from './Admin/Dashboard'; // Renamed for clarity (wraps AdminDashboard)
export { default as ManageProductsPage } from './Admin/ManageProducts'; // Renamed for clarity

// Exports from Auth/ subfolder (auth pages)
export { default as LoginPage } from './Auth/LoginPage';
export { default as RegisterPage } from './Auth/RegisterPage';
