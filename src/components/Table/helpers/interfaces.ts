import type { FilterDropdownProps } from 'antd/lib/table/interface';

export interface IExtendedFilterFormProps extends FilterDropdownProps {
  columnName: string;
  query: string;
}
