import { lazy, Suspense } from "react";
const Routes = lazy(() => import('routes'));
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes />
    </Suspense>
  );
}
