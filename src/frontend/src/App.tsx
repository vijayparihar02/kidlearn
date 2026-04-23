import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const HomePage = lazy(() => import("./pages/Home"));
const AlphabetPage = lazy(() => import("./pages/Alphabet"));
const NumbersPage = lazy(() => import("./pages/Numbers"));
const AnimalsPage = lazy(() => import("./pages/Animals"));
const QuizPage = lazy(() => import("./pages/Quiz"));
const ColoringPage = lazy(() => import("./pages/Coloring"));
const SettingsPage = lazy(() => import("./pages/Settings"));

function PageLoader() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-64">
      <div className="text-6xl animate-bounce">🌟</div>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const alphabetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/alphabet",
  component: AlphabetPage,
});

const numbersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/numbers",
  component: NumbersPage,
});

const animalsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/animals",
  component: AnimalsPage,
});

const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: QuizPage,
});

const coloringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coloring",
  component: ColoringPage,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  alphabetRoute,
  numbersRoute,
  animalsRoute,
  quizRoute,
  coloringRoute,
  settingsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
