import React from "react";
export default function Signup() {
  return (
    <div className="container my-5" style={{ maxWidth: "50%" }}>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required
            minLength={3}
          />
        </div>
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
        <div className="mb-3">
          <label htmlFor="con_password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="con_password"
            required
            minLength={6}
          />
        </div>

        <button type="submit" className="btn btn-success">
          SignUp
        </button>
      </form>
    </div>
  );
}
