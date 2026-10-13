export const BASE_PATH = '/test_exports';

const normalizeSlashes = (path) => path.replace(/\/{2,}/g, '/');

export const withBasePath = (path = '/', { includeBase = true } = {}) => {
  if (!includeBase) return normalizeSlashes(`/${path}`);

  const basePath = BASE_PATH === '/' ? '' : BASE_PATH;
  const joinedPath = `${basePath}/${path}`;

  return normalizeSlashes(joinedPath);
};

export const routerPath = (path = '/') =>
  withBasePath(path, { includeBase: false });

export const stripBasePath = (path) => {
  if (path === BASE_PATH) return '/';
  if (path.startsWith(`${BASE_PATH}/`)) return path.slice(BASE_PATH.length);

  return path;
};
