import React, { Suspense } from "react";
import Banner from "../component/Banner/Banner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../component/ErrorBoundary";
// import CoinsTable from '../component/CoinsTable'
const CoinsTable = React.lazy(() => import("../component/CoinsTable"));

const Homepage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary   FallbackComponent={ErrorFallback}
        onReset={() => {
          // reset the state of your app so the error doesn't happen again
        }}>
        <Suspense fallback={<div>Loading...</div>}>
          <CoinsTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Homepage;
