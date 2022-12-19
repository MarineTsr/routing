import { useState } from "react";

function Auth() {
  const [login, setLogin] = useState();
  const [pwd, setPwd] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentLogin = event.target.querySelector("#login").value;
    const currentPwd = event.target.querySelector("#pwd").value;

    if (currentLogin) {
      setLogin(currentLogin);
    }

    if (currentPwd) {
      setPwd(currentPwd);
    }

    console.log(login, pwd);
  };

  return (
    <>
      <h2 className="text-center mb-5 pb-3">Authentification</h2>
      <form className="row justify-content-center" onSubmit={handleSubmit}>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="form-group">
            <label htmlFor="login" className="mb-2">
              Login
            </label>
            <input type="text" name="login" id="login" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="mb-2">
              Password
            </label>
            <input type="password" name="pwd" id="pwd" />
          </div>
          <div className="d-flex justify-content-center mt-5 pt-3">
            <button type="submit" className="btn btn--outlined btn--dark">
              Validate
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Auth;
