"use client";
import type { ClerkDefaultPermissions } from "@clerk";
import { generateGate } from "@clerk";

// Generate and downloaded from our dashboard
export type AppPermissions =
  | ClerkDefaultPermissions
  | "edit"
  | "uploadLogo"
  | "invite"
  | "delete";

export const { Gate } = generateGate<AppPermissions>();
