import { useNavigate } from "react-router-dom";

function AccountSummary() {
  const navigate = useNavigate();

  const navigateToInfos = () => {
    navigate("/account/infos", { preventScrollReset: true });
  };

  return (
    <>
      <h3 className="text-center mb-5 pb-3">Account Summary</h3>
      <div className="d-flex justify-content-center mt-5">
        <button
          type="button"
          className="btn btn--outlined btn--dark"
          onClick={navigateToInfos}
        >
          Go to infos
        </button>
      </div>
    </>
  );
}

export default AccountSummary;
