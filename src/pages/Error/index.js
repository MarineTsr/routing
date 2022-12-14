import { useRouteError, Link } from "react-router-dom";

function Error() {
  const errorInfos = useRouteError();

  return (
    <div className="container">
      <h2 className="text-center mt-5">
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
  );
}

export default Error;
