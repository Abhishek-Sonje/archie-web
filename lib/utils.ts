/* ─────────────────────────────────────────────────────────────────
   lib/utils.ts
   Shared utility functions. Keep this file small.
───────────────────────────────────────────────────────────────── */

/**
 * Joins class names, filtering falsy values.
 * Lightweight alternative to clsx for this project.
 */
export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Copies text to clipboard with a fallback for older browsers.
 * Returns true if successful.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}
