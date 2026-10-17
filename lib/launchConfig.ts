/**
 * Website Launch & Coming Soon Configuration
 *
 * To turn off the "Coming Soon" page once the client has completed payment:
 * Change COMING_SOON_ACTIVE to false (or set environment variable COMING_SOON=false).
 */
export const COMING_SOON_ACTIVE =
  process.env.COMING_SOON === "false"
    ? false
    : process.env.COMING_SOON === "true"
    ? true
    : true; // Set to true to protect the site before payment; set to false to launch live.

/**
 * Secret passcode for developer / authorized preview bypass.
 * You can bypass either by:
 * 1. Typing this passcode in the "Authorized Desk Access" unlock modal on the coming soon page
 * 2. Appending ?preview=aurum2026 or ?pass=aurum2026 to any page URL
 */
export const PREVIEW_SECRET = process.env.PREVIEW_SECRET || "aurum2026";
