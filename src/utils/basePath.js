
export const BASE_PATH = '/test_exports';

const normalizeSlashes = (path) => path.replace(/\/{2,}/g, '/');

export const withBasePath = (path = '/', { includeBase = true } = {}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!includeBase) {
    return normalizeSlashes(normalizedPath);
  }

  const basePath = BASE_PATH === '/' ? '' : BASE_PATH;

  // Avoid adding the base path twice.
  if (
    basePath &&
    (normalizedPath === basePath ||
      normalizedPath.startsWith(`${basePath}/`))
  ) {
    return normalizeSlashes(normalizedPath);
  }

  return normalizeSlashes(`${basePath}/${normalizedPath}`);
};

// For paths used inside React Router, don't add BASE_PATH.
// BrowserRouter basename handles it automatically.
export const routerPath = (path = '/') =>
  withBasePath(path, { includeBase: false });

export const stripBasePath = (path) => {
  if (path === BASE_PATH || path === `${BASE_PATH}/`) {
    return '/';
  }

  if (path.startsWith(`${BASE_PATH}/`)) {
    return path.slice(BASE_PATH.length);
  }

  return path;
};
