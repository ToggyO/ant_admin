import type { WithModalStateProps } from '../HOC/withModalState';

export interface ICommonModalFormProps extends WithModalStateProps {
  onCancel?: FunctionType;
}
