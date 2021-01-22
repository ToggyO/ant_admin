/**
 * Description :Wrapper on ant design Form.Item component
 */
// TODO: add description
import React, { useContext } from 'react';
import { DatePicker, Form, Input, InputNumber, Select } from 'antd';
import type { OptionProps } from 'antd/lib/select';
import MaskedInput from 'antd-mask-input';

import { StandardFormContext } from './ContextForm';

import type { IFormItemWrapperProps } from './interfaces';
import type { FieldsOptions, SelectOptions } from './types';

const { RangePicker } = DatePicker;

export const FormItemWrapper: React.FC<IFormItemWrapperProps> = ({
  type,
  name,
  dataSource = [],
  component = () => <div />,
  formItemStyle,
  propsToChild,
  ...restFormItemProps
}): JSX.Element => {
  let getOptions;
  const { form, options } = useContext(StandardFormContext);

  if (typeof options === 'function') {
    getOptions = options(form);
  } else {
    getOptions = options;
  }

  const {
    props: componentProps = {},
    formItemStyle: fomItemStyleFromOptions = {},
    ...restItemProps
  }: FieldsOptions = getOptions[name] || {};
  const { selectOptions } = componentProps as any;

  const fieldType = () => {
    switch (type) {
      case 'text-input':
        return <Input {...componentProps} {...propsToChild} />;
      case 'password-input':
        return <Input.Password {...componentProps} {...propsToChild} />;
      case 'number-input':
        return <InputNumber {...componentProps} {...propsToChild} />;
      case 'text-area':
        return <Input.TextArea {...componentProps} {...propsToChild} />;
      case 'select':
        return (
          <Select {...componentProps} {...propsToChild} >
            {selectOptions.map((option: OptionProps) => (
              <Select.Option value={option.key!} key={option.key}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        );
      case 'async-load-select':
        return (
          <Select {...componentProps} {...propsToChild} >
            {dataSource.map((data: SelectOptions) => (
              <Select.Option value={data.key} key={data.key}>
                {data.label}
              </Select.Option>
            ))}
          </Select>
        );
      case 'phoneNumber': {
        const { mask, ...restMaskedInputProps } = componentProps;
        return <MaskedInput mask={mask} {...restMaskedInputProps} {...propsToChild}  />;
      }
      case 'date-picker':
        return <DatePicker {...componentProps} {...propsToChild} />;
      case 'range-picker':
        return <RangePicker {...componentProps} {...propsToChild} />;
      case 'custom-component':
        return component({ ...componentProps, ...propsToChild });
      default:
        return <Input {...componentProps} {...propsToChild} />;
    }
  };

  return (
    <Form.Item name={name} style={formItemStyle || fomItemStyleFromOptions} {...restFormItemProps} {...restItemProps}>
      {fieldType()}
    </Form.Item>
  );
};
