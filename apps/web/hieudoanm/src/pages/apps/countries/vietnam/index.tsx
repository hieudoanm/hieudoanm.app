import { GridTemplate } from '@web/router/apps/Apps';
import { NextPage } from 'next';

const CountriesApps: NextPage = () => {
  return <GridTemplate folder='vietnam' />;
};

export const dynamic = 'force-static';

export default CountriesApps;
