/**
 * Helper hook function to get entity id from pathname
 * @return {string} pathname - history.location.pathname
 * @return {number} - entity id
 */
export function useIdFromPath(pathname: string): number {
  const splitted = pathname.split('/');
  return parseInt(splitted[splitted.length - 1], 10);
}
