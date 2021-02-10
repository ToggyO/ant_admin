import React from 'react';
import { useHistory } from 'umi';
import { PageHeader } from 'antd';

import { breadcrumbsConfig } from 'config/breadcrumbs.config';

// FIXME: fix breadcrumbs
const AcademicsList: React.FC = () => {
  const history = useHistory();
  return (
    <PageHeader
      title="Academics"
      onBack={() => history.goBack()}
      breadcrumb={{ routes: breadcrumbsConfig }}
    ></PageHeader>
  );
};

export default AcademicsList;
