
export const BASE_PATH = '/test_exports';

const normalizeSlashes = (path) => path.replace(/\/{2,}/g, '/');

export const withBasePath = (path = '/', { includeBase = true } = {}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // If the path already includes the base, don't add it again.
  if (
    normalizedPath === BASE_PATH ||
    normalizedPath.startsWith(`${BASE_PATH}/`)
  ) {
    return normalizeSlashes(normalizedPath);
  }

  if (!includeBase) {
    return normalizeSlashes(normalizedPath);
  }

  return normalizeSlashes(`${BASE_PATH}/${normalizedPath}`);
};

export const routerPath = (path = '/') => withBasePath(path);

export const stripBasePath = (path) => {
  if (path === BASE_PATH || path === `${BASE_PATH}/`) {
    return '/';
  }

  if (path.startsWith(`${BASE_PATH}/`)) {
    return path.slice(BASE_PATH.length);
  }

  return path;
};
