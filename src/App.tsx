import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './routes/public/home-page';
import { CatalogPage } from './routes/public/catalog-page';
import { NewProduct } from './routes/admin/new-product';
import { PublicLayout } from './routes/public/__public';
import { AdminLayout } from './routes/admin/__admin';
import { CartPage } from './routes/public/cart-page';
import { NewClient } from './routes/admin/new-client';
import { LoginPage } from './routes/public/login-page';
import { RegisterPage } from './routes/public/register-page';
import { ProductDetails } from './routes/public/product-details';

const queryClient = new QueryClient();

const rootRoute = createRootRoute();

const publicLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "public",
  component: PublicLayout
});


const adminLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin",
  component: AdminLayout
});


const indexRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/',
  component: HomePage, 
});

const productDetailsRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/products/$productId',
  component: ProductDetails,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginPage,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterPage,
});


const catalogRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/catalog',
  component: CatalogPage,
});

const cartRoute = createRoute({
  getParentRoute: () => publicLayoutRoute,
  path: '/cart',
  component: CartPage
});

const adminProductsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/products/new',
  component: NewProduct,
});

const adminClientsRoute = createRoute({
  getParentRoute: () => adminLayoutRoute,
  path: '/admin/clients/new',
  component: NewClient,
});

const routeTree = rootRoute.addChildren([
 publicLayoutRoute.addChildren([indexRoute, catalogRoute, cartRoute, loginRoute, registerRoute, productDetailsRoute]),
  adminLayoutRoute.addChildren([adminProductsRoute, adminClientsRoute]),
]);
const router = createRouter({ 
  routeTree,
  scrollRestoration: true,

});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}