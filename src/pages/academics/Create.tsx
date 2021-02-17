import React from 'react';
import { PageHeader } from 'antd';

import { Loader, useLoading } from 'components';

const CreateAcademic: React.FC = () => {
  const loading = useLoading('academics');
  return (
    <Loader loading={loading}>
      <PageHeader title="Profile"></PageHeader>
    </Loader>
  );
};

export default CreateAcademic;
