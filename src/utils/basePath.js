
export const BASE_PATH = '/test_exports';

const normalizeSlashes = (path) => path.replace(/\/{2,}/g, '/');

export const withBasePath = (path = '/', { includeBase = true } = {}) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (!includeBase) {
    return normalizeSlashes(normalizedPath);
  }

  const basePath = BASE_PATH === '/' ? '' : BASE_PATH;
  const joinedPath = `${basePath}/${normalizedPath}`;

  return normalizeSlashes(joinedPath);
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
