"use client"
import { PropsWithChildren } from "react";
import { createContextAndHook } from "./utils";

const [LoggedUserContext, useLoggedUser] = createContextAndHook<{
  permissions: string[];
}>("LoggedUser");

export function LoggedUserProvider(props: PropsWithChildren) {
  return (
    <LoggedUserContext.Provider
      value={{
        // This list is supposed to be fetched
        permissions: ["edit", 'organization:create'],
      }}
    >
      {props.children}
    </LoggedUserContext.Provider>
  );
}

export { useLoggedUser };
