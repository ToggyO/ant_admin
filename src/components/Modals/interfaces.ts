import type { WithModalStateProps } from '../HOC';

export interface ICommonModalFormProps extends WithModalStateProps {
  onCancel?: FunctionType;
  afterClose?: FunctionType;
}
