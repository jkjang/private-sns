// @flow
import React from 'react';
import type { Node } from 'react';
import SignupForm from 'components/randing/SignupForm/SignupForm';
import 'components/randing/RandingTemplate/RandingTemplate.scss';

type Props = {
  header: Node,
  topbar: Node,
  main: Node,
};

const RandingTemplate = ({ header, topbar, main }: Props) => (
  <div>
    <div className="py-6 py-sm-8 py-lg-10 py-xl-12 jumbotron-codelines">
      <div className="container-lg p-responsive position-relative">
        <div className="d-md-flex flex-items-center gutter-md-spacious">
          <div className="col-md-7 text-center text-md-left ">
            <h1 className="alt-h0 text-white lh-condensed-ultra mb-3">Built for developers</h1>
            <p className="alt-lead mb-4">
              GitHub is a development platform inspired by the way you work. From{' '}
              <a href="/open-source" className="text-white jumbotron-link">
                open source
              </a>
              to
              <a href="/business" className="text-white jumbotron-link">
                business
              </a>, you can host and review code, manage projects, and build software alongside
              millions of other&nbsp;developers.
            </p>
          </div>
          <div className="mx-auto col-sm-8 col-md-5 hide-sm">
            <div className="rounded-1 text-gray bg-gray-light py-4 px-4 px-md-3 px-lg-4">
              <SignupForm />
            </div>
          </div>
          <div className="d-sm-none text-center">
            <a
              rel="nofollow"
              className="btn btn-primary btn-large border-0"
              data-ga-click="Signup, Attempt, location:jumbotron;"
              href="/join?source=button-home"
            >
              Sign up for GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RandingTemplate;
