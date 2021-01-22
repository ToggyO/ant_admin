/**
 * Description: Form components types
 */

import type { CSSProperties } from "react";

import type { FormItemProps } from "antd/lib/form";

export interface FieldsOptions extends Omit<FormItemProps, 'children'> {
  props?: Record<string, any>;
  formItemStyle?: CSSProperties;
}

export type SelectOptions = {
  key: number | string;
  label: number | string;
};

