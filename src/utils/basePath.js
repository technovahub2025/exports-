export const BASE_PATH = '/test_exports';

export const withBasePath = (path) =>
  path === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${path}`;

export const stripBasePath = (path) => {
  if (path === BASE_PATH) return '/';
  if (path.startsWith(`${BASE_PATH}/`)) return path.slice(BASE_PATH.length);

  return path;
};
