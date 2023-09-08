"use client"
import React from "react";
import { useLoggedUser } from "./context";
export type ClerkDefaultPermissions =
  | "organization:create"
  | "organization:delete";
type ClerkDefaultPermission = string;
type ErrorMessage<TError extends string> = TError;
type OrganizationResource = {};

interface GateProps<TPermissions extends ClerkDefaultPermission> {
  permissions?: TPermissions[];
  isAuthorized?: ((organization: OrganizationResource) => boolean) | boolean;
}

export function Gate<
  TPermissions extends ClerkDefaultPermission = ClerkDefaultPermissions
>(props: React.PropsWithChildren<GateProps<TPermissions>>) {
  const loggedUser = useLoggedUser();

  const canAccess =
    (props.permissions?.filter((p) => loggedUser?.permissions.includes(p))
      ?.length || 0) > 0;

  if (!canAccess) {
    return null;
  }

  return <>{props.children}</>;
}

export function generateGate<TPermissions extends ClerkDefaultPermission>() {
  return {
    Gate: Gate<TPermissions>,
  };
}
