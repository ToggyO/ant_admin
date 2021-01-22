/**
 * Description: Loader component interfaces
 */

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export interface ISpinnerProps {
  loading: boolean;
  size?: 'small' | 'default' | 'large';
}
