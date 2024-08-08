import { PropsWithChildren } from 'react';

import { Role, useAuth } from '~/context/auth_context';

type WithRoleProps = {
  role: Role;
};

const WithRole = (props: PropsWithChildren<WithRoleProps>) => {
  const { authState } = useAuth();

  if (authState?.role !== props.role) {
    return <></>;
  }
  return props.children;
};
export default WithRole;
