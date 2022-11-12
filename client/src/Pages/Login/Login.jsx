import React from "react";

export default function Login() {
  return (
    <div className="container my-5" style={{ maxWidth: "50%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
            minLength={5}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            minLength={6}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}
