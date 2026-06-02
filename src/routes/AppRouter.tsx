import { Redirect, Route } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { DEFAULT_ROUTE, ROUTE_CONFIG } from './routeConfig';

const AppRouter: React.FC = () => (
  <>
    <Route exact path="/">
      <Redirect to={DEFAULT_ROUTE.path} />
    </Route>
    {ROUTE_CONFIG.map(({ path, component: Page }) => (
      <Route key={path} exact path={path}>
        <PageShell>
          <Page />
        </PageShell>
      </Route>
    ))}
  </>
);

export default AppRouter;
