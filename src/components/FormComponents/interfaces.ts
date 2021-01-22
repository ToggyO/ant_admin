/**
 * Description: Form components interfaces
 */

import type React from 'react';
import type { FormInstance, FormProps } from 'antd/lib/form';

import type { FieldsOptions, SelectOptions } from './types';

export interface IStandardFormContextType {
  form: Partial<FormInstance>;
  options: FieldsOptions | Record<string, any>;
}

export interface IStandardFormProps extends Omit<FormProps, 'onFinish'> {
  onFinish: <T>(values: T) => void;
  options: FunctionType | Record<string, FieldsOptions>;
  outerFormInstance?: FormInstance;
  asyncInitValues?: Record<string, any>;
  errorsFromBackend?: [];
}

export interface IFormItemWrapperProps {
  type:
    | 'text-input'
    | 'password-input'
    | 'number-input'
    | 'select'
    | 'async-load-select'
    | 'text-area'
    | 'date-picker'
    | 'range-picker'
    | 'phoneNumber'
    | 'custom-component';
  name: string;
  dataSource?: SelectOptions[];
  component?: (props: Record<string, any>) => React.ReactNode | JSX.Element;
  propsToChild?: Record<string, any>;
  [key: string]: any;
}
