import React from "react";
import useId from "../hooks/useId";
import RegisterPage from "../pages/Register";
const HomePage = React.lazy(() => import("../pages/Home"));
const PropertiesPage = React.lazy(() => import("../pages/Properties"));
const HouseItemPage = React.lazy(() => import("../pages/HouseItem"));
const FavouritesPage = React.lazy(() => import("../pages/Favourites"));
const MyProfilePage = React.lazy(() => import("../pages/MyProfile"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItemPage />
      </React.Suspense>
    ),
    title: "HouseItemPage",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <FavouritesPage />
      </React.Suspense>
    ),
    title: "FavouritesPage",
    path: "/favourites",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <MyProfilePage />
      </React.Suspense>
    ),
    title: "MyProfilePage",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <RegisterPage />,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
