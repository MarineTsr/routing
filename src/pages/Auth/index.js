import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useSubmit } from "react-router-dom";

function Auth() {
  const response = useActionData();
  const { register, handleSubmit } = useForm();
  const submit = useSubmit();

  useEffect(() => {
    console.log("Action response : ", response);
  }, [response]);

  const handleFormSubmit = async (data) => {
    submit(data, { method: "post" });
  };

  return (
    <>
      <h2 className="text-center mb-5 pb-3">Authentification</h2>
      <form
        onSubmit={handleSubmit((data) => handleFormSubmit(data))}
        className="row justify-content-center"
      >
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="form-group">
            <label htmlFor="login" className="mb-2">
              Login
            </label>
            <input type="text" name="login" id="login" {...register("login")} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd" className="mb-2">
              Password
            </label>
            <input type="password" name="pwd" id="pwd" {...register("pwd")} />
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
