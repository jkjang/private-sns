import React, { Component } from 'react';

class Signup extends Component {
  render() {
    return (
      <form>
        <dl className="form-group mt-0">
          <dt className="input-label">
            <label className="form-label f5" htmlFor="user[login]">
              Username
            </label>
          </dt>
          <dd>
            <input
              type="text"
              name="user[login]"
              id="user[login]"
              className="form-control form-control-lg input-block"
              placeholder="Pick a username"
              autoFocus=""
            />
          </dd>
        </dl>
        <dl className="form-group">
          <dt className="input-label">
            <label className="form-label f5" htmlFor="user[email]">
              Email
            </label>
          </dt>
          <dd>
            <input
              type="text"
              name="user[email]"
              id="user[email]"
              className="form-control form-control-lg input-block js-email-notice-trigger"
              placeholder="you@example.com"
            />
          </dd>
        </dl>
        <dl className="form-group">
          <dt className="input-label">
            <label className="form-label f5" htmlFor="user[password]">
              Password
            </label>
          </dt>
          <dd>
            <input
              type="password"
              name="user[password]"
              id="user[password]"
              className="form-control form-control-lg input-block"
              placeholder="Create a password"
            />
          </dd>
          <p className="form-control-note">
            Use at least one letter, one numeral, and seven characters.
          </p>
        </dl>
        <input type="hidden" name="source" className="js-signup-source" value="form-home" />
        <input
          type="text"
          name="required_field_8405"
          id="required_field_8405"
          hidden="hidden"
          className="form-control"
        />
        <input type="hidden" name="timestamp" value="1529212890371" className="form-control" />
        <input
          type="hidden"
          name="timestamp_secret"
          value="787957add1d8669487adee1b0473fb7c1123a75a5e970af4e7e9476d242dd9d9"
          className="form-control"
        />

        <button
          className="btn btn-primary btn-large f4 btn-block"
          type="submit"
          data-ga-click="Signup, Attempt, location:teams;"
        >
          Sign up for GitHub
        </button>
        <p className="form-control-note mb-0 text-center">
          By clicking “Sign up for GitHub”, you agree to our
          <a className="" href="https://help.github.com/terms">
            terms of service
          </a>
          and
          <a className="" href="https://help.github.com/privacy">
            privacy statement
          </a>.
          <span className="js-email-notice">
            We’ll occasionally send you account related emails.
          </span>
        </p>
      </form>
    );
  }
}

export default Signup;
