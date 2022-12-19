import { Suspense } from "react";
import { Outlet, NavLink, useLoaderData } from "react-router-dom";
// import { useParams, useSearchParams } from "react-router-dom";
import Loader from './../../components/Layout/Loader';

function Account() {
  // const params = useParams();
  // const [queryParams] = useSearchParams();

  // console.log(params);
  // console.log(queryParams);
  // console.log(queryParams.get("age"));

  const { user } = useLoaderData();

  return (
    <>
      <div className="d-flex mb-5 pb-5">
        <NavLink end to="" className="btn btn--outlined btn--dark mx-2">
          Summary
        </NavLink>
        <NavLink to="infos" className="btn btn--outlined btn--dark mx-2">
          Infos
        </NavLink>
      </div>

      <h2 className="text-center mb-5 pb-3">Account</h2>

      <Suspense fallback={<Loader />}>
        <Outlet context={user} />
      </Suspense>
    </>
  );
}

export default Account;
