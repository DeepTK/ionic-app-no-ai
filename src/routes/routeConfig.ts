import type { ComponentType } from "react";
import {
  cameraOutline,
  homeOutline,
  notificationsOutline,
  peopleOutline,
} from "ionicons/icons";
import { matchPath } from "react-router-dom";
import Post from "../pages/Post";
import PostDetail from "../pages/PostDetail";
import Users from "../pages/Users";
import UserDetail from "../pages/UserDetail";
import Camera from "../pages/Camera";
import Notifications from "../pages/Notifications";

export type RouteConfig = {
  id: string;
  path: string;
  title: string;
  label: string;
  icon?: string;
  menu?: boolean;
  default?: boolean;
  component: ComponentType;
  parentId?: string;
};

export const ROUTE_CONFIG: RouteConfig[] = [
  {
    id: "post",
    path: "/post",
    title: "Post",
    label: "Post",
    icon: homeOutline,
    menu: true,
    default: true,
    component: Post,
  },
  {
    id: "post-detail",
    path: "/post-detail/:id",
    title: "Post Detail",
    label: "Post Detail",
    component: PostDetail,
    parentId: "post",
  },
  {
    id: "users",
    path: "/users",
    title: "Users",
    label: "Users",
    icon: peopleOutline,
    menu: true,
    component: Users,
  },
  {
    id: "user-detail",
    path: "/user-detail/:id",
    title: "User Detail",
    label: "User Detail",
    component: UserDetail,
    parentId: "users",
  },
  {
    id: "camera",
    path: "/camera",
    title: "Camera",
    label: "Camera",
    icon: cameraOutline,
    menu: true,
    component: Camera,
  },
  {
    id: "notifications",
    path: "/notifications",
    title: "Notifications",
    label: "Notifications",
    icon: notificationsOutline,
    menu: true,
    component: Notifications,
  },
];

export const DEFAULT_ROUTE =
  ROUTE_CONFIG.find((route) => route.default === true) ?? ROUTE_CONFIG[0];

export const MENU_ROUTES = ROUTE_CONFIG.filter((route) => route.menu === true);

export const getRouteByPath = (pathname: string): RouteConfig | undefined =>
  ROUTE_CONFIG.find((route) =>
    matchPath(pathname, { path: route.path, exact: true }),
  );

export const getRouteById = (routeId: string): RouteConfig | undefined =>
  ROUTE_CONFIG.find((route) => route.id === routeId);

export const isMenuRouteActive = (
  route: RouteConfig,
  pathname: string,
): boolean => {
  if (matchPath(pathname, { path: route.path, exact: true })) {
    return true;
  }

  return ROUTE_CONFIG.some(
    (child) =>
      child.parentId === route.id &&
      matchPath(pathname, { path: child.path, exact: true }),
  );
};
