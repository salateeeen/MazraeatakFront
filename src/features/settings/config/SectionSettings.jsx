export const SETTINGS_SECTIONS = {
  account: {
    title: "Account",
    default: "personalInfo",
    items: [
      { label: "Personal Information", path: "personalInfo" },
      { label: "Email", path: "email" },
      { label: "Password", path: "password" },
      { label: "Account Actions", path: "actions" },
    ],
  },

  notifications: {
    title: "Notifications",
    default: "settings",
    items: [
      { label: "Delivery Methods", path: "deliveryMethods" },
      { label: "Notification Types", path: "notificationTypes" },
      { label: "Sound and Alerts", path: "sound" },
    ],
  },

  preferences: {
    title: "Preferences",
    default: "general",
    items: [
      { label: "General Preferences", path: "general" },
      { label: "Appearance", path: "appearance" },
      { label: "Language and Region", path: "languageRegion" },
      { label: "Theme Mode", path: "theme" },
    ],
  },

  privacy: {
    title: "Privacy",
    default: "overview",
    items: [
      { label: "Privacy Overview", path: "overview" },
      { label: "Profile Visibility", path: "visibility" },
      { label: "Data Protection", path: "dataProtection" },
    ],
  },
};
