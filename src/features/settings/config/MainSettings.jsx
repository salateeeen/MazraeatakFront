import { Bell, SettingsIcon, Shield, SlidersHorizontal, User } from "lucide-react";

export const SETTINGS = {
  title: "Settings",
  default: "general",
  items: [
    { icon: <User />, label: "Account", path: "account" },
    { icon: <SlidersHorizontal/>, label: "Preferences", path: "preferences" },
    { icon: <Bell />, label: "Notifications", path: "notifications" },
    { icon: <Shield />, label: "Privacy", path: "privacy" },
  ],
};
