import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import AuthProvider from '../hook/authContext'

export const Route = createRootRoute({
  component: () => (
    <AuthProvider>
    <React.Fragment>
      <Outlet />
    </React.Fragment>
    </AuthProvider>
  ),
})
