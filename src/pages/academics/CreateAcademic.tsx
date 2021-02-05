import React from 'react';
import { useSelector } from 'umi';
import { PageHeader } from 'antd';

import { Loader } from 'components';
import type { ConnectState, ILoading } from 'models/connect';

const CreateAcademic: React.FC = () => {
  let {
    models: { academics: loading },
  } = useSelector<ConnectState, ILoading>((state) => state.loading);

  if (typeof loading === 'undefined') {
    loading = false;
  }

  return (
    <Loader loading={loading}>
      <PageHeader title="Profile"></PageHeader>
    </Loader>
  );
};

export default CreateAcademic;
