import React, { Component } from 'react';

class MainTopbar extends Component {
  render() {
    return (
      <div className="action-nav">
        <div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
          <div className="left-items d-flex flex-row align-items-center">
            <div className="hide-desktop">
              <a
                href="#"
                id="action-link-mobile"
                className="action-link d-flex align-items-center justify-content-between"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4.5 7.5h15a1.5 1.5 0 0 0 0-3h-15a1.5 1.5 0 0 0 0 3zM19.5 10.5h-15a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3zM19.5 16.5h-15a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 0-3z" />
                </svg>
              </a>
            </div>
            <div className="btn-group action-btn-wrap">
              <a href="/create/question" data-type="question" className="btn btn-success">
                Ask question
              </a>
              <button
                type="button"
                className="btn btn-success dark-shade dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
              />
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="/create/blog" data-type="blog">
                  <i className="mdi mdi-file-document-box" /> Write a blog post
                </a>
                <a className="dropdown-item" href="/create/news" data-type="news">
                  <i className="mdi mdi-link-variant" /> Submit a news
                </a>
              </div>
            </div>
            <a
              id="search-handle"
              className="search-handle d-flex flex-row align-items-center"
              href="/search"
            >
              <svg viewBox="0 0 20 20">
                <path d="M19.2 16.2L15 12c.6-1.1 1-2.4 1-3.8C16 3.9 12.5.4 8.2.4S.4 3.9.4 8.2 3.9 16 8.2 16c1.4 0 2.7-.4 3.8-1l4.2 4.2c.1.1.3.2.4.2s.3-.1.4-.2l2.2-2.2c.2-.2.2-.6 0-.8zm-17.6-8c0-3.6 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6-3.6 0-6.6-3-6.6-6.6zm15 9.7L13 14.3c.5-.4.9-.8 1.3-1.3l3.6 3.6-1.3 1.3z" />
              </svg>
              <span>Search Hashnode</span>
            </a>
          </div>
          <div className="right-items d-flex flex-row align-items-center">
            <div className="notifications-dropdown-wrapper">
              <a
                href="/notification"
                className="action-link d-flex align-items-center justify-content-between"
              >
                <svg viewBox="0 0 20 20">
                  <path d="M18.1 13.4c0-.8-.5-1.4-.9-1.9-.5-.6-1.1-1.3-1.1-2.5V6.6c0-3.3-2.9-6.2-6.3-6.2S3.5 3.3 3.5 6.7V9c0 1.2-.6 1.9-1.1 2.5-.5.5-.9 1.1-.9 1.9 0 1.5 2.2 2.4 5 2.7v.1c0 2 1.5 3.5 3.4 3.5s3.4-1.5 3.4-3.5V16c2.7-.3 4.8-1.1 4.8-2.6zm-8.3 5.1c-1.3 0-2.3-1-2.3-2.4.7.1 1.5.1 2.2.1.8 0 1.6 0 2.3-.1.1 1.4-.9 2.4-2.2 2.4zm0-3.4c-5.1 0-7.2-1.1-7.2-1.8 0-.4.2-.7.7-1.2.6-.7 1.4-1.6 1.4-3.3V6.7c0-2.7 2.5-5.1 5.1-5.1 2.7 0 5.1 2.4 5.1 5v2.3c0 1.7.8 2.6 1.4 3.3.4.5.7.8.7 1.2 0 .6-2.1 1.7-7.2 1.7z" />
                </svg>
                <span className="num-count">1</span>
              </a>
            </div>
            <a href="/login" className="btn get-started">
              Sign in
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MainTopbar;
