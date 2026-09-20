export interface NavigationItem {
  key: string;
  path: string;
  icon?: unknown;
  isContentType?: boolean;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
