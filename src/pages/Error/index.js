import { useRouteError, Link } from "react-router-dom";

function Error() {
  const errorInfos = useRouteError();

  return (
    <div className="d-flex flex-column flex-fill align-items-center justify-content-center vh-100">
      <div className="container">
        <h2 className="text-center">
          {errorInfos.status ? errorInfos.status + " " : ""}Error
        </h2>
        <p className="text-center">
          {errorInfos.message || errorInfos.statusText}
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/" className="btn btn--filled btn--primary">
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
