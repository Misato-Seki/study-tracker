/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StudylogImport } from './routes/studylog'
import { Route as CreateImport } from './routes/create'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const StudylogRoute = StudylogImport.update({
  id: '/studylog',
  path: '/studylog',
  getParentRoute: () => rootRoute,
} as any)

const CreateRoute = CreateImport.update({
  id: '/create',
  path: '/create',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/create': {
      id: '/create'
      path: '/create'
      fullPath: '/create'
      preLoaderRoute: typeof CreateImport
      parentRoute: typeof rootRoute
    }
    '/studylog': {
      id: '/studylog'
      path: '/studylog'
      fullPath: '/studylog'
      preLoaderRoute: typeof StudylogImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/create': typeof CreateRoute
  '/studylog': typeof StudylogRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/create': typeof CreateRoute
  '/studylog': typeof StudylogRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/create': typeof CreateRoute
  '/studylog': typeof StudylogRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/create' | '/studylog'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/create' | '/studylog'
  id: '__root__' | '/' | '/create' | '/studylog'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CreateRoute: typeof CreateRoute
  StudylogRoute: typeof StudylogRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CreateRoute: CreateRoute,
  StudylogRoute: StudylogRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/create",
        "/studylog"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/create": {
      "filePath": "create.tsx"
    },
    "/studylog": {
      "filePath": "studylog.tsx"
    }
  }
}
ROUTE_MANIFEST_END */