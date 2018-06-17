import React from 'react';
import './MainSidebar.scss';

const MainHeader = () => (
  <header className="sidebar">
    <div className="sidebar-content">
      <div className="sidebar-top">
        <div className="logo-section">
          <a href="/">Private SNS</a>
        </div>
        <nav className="primary">
          <ul className="list-unstyled">
            <li>
              <a href="/" className="d-flex flex-row align-items-center active">
                <svg viewBox="0 0 42 28" width="24" height="24">
                  <path d="M6.4 25.602v-3.202h9.6v3.202h-9.6zM6.4 16h16v3.2h-16v-3.2zM22.4 25.602v6.398h-22.4v-28.8c0-1.766 1.434-3.2 3.2-3.2h22.4c1.766 0 3.2 1.434 3.2 3.2v9.6h-25.6v16.002h16v-6.402h9.6v3.202h-6.4zM25.6 9.6v-6.4h-22.4v6.4h22.4zM8 8h-3.2v-3.2h3.2v3.2zM12.8 8h-3.2v-3.2h3.2v3.2zM17.6 8h-3.2v-3.2h3.2v3.2zM25.6 16h3.2v3.2h-3.2v-3.2z" />
                </svg>
                <span>Posts</span>
              </a>
            </li>
            <li>
              <a href="/news" className="d-flex flex-row align-items-center  show-indicator">
                <svg width="24" height="24">
                  <path d="M22.1 11.7c0-1.7-1.3-3-2.9-3.3V4.2c0-.2-.1-.4-.3-.5-.2-.1-.4-.1-.5 0-.9.7-1.7 1.3-2.4 1.8-2.8 2.1-4.2 3.2-8.6 3.2H5.3c-.9 0-1.7.3-2.4 1-.6.6-1 1.4-1 2.3 0 1.3.8 2.4 2 3l.7 4.2c.1.7.8 1.3 1.6 1.3h.3c.4-.1.8-.3 1.1-.7.2-.3.3-.7.2-1.1l-.5-3.3h1.6c1.8.1 3.1.5 4.4 1.2.9.5 1.7 1.1 2.8 1.9.7.5 1.4 1.1 2.3 1.7.1.1.2.1.3.1.1 0 .2 0 .2-.1.2-.1.3-.3.3-.5V15c1.7-.3 2.9-1.7 2.9-3.3zM5.3 14.2c-.3 0-.5 0-.7-.1C3.7 13.8 3 12.9 3 12c0-.6.2-1.2.7-1.6.4-.4 1-.7 1.6-.7h3.1v4.5H5.3zm4.1-4.6c3.3-.3 4.9-1.4 7.3-3.3l.1-.1c.4-.3.9-.7 1.4-1v13.5c-.5-.4-1-.7-1.4-1.1h-.1c-1.1-.8-2-1.5-2.9-2-1.3-.7-2.7-1.1-4.4-1.3V9.6zm9.8-.2c1.1.2 1.9 1.1 1.9 2.2s-.8 2-1.9 2.2V9.4zM5.3 15.2h.9l.5 3.5c0 .1 0 .3-.1.4-.1.1-.2.2-.4.2-.3.1-.6-.1-.7-.4L5 15.2h.3z" />
                </svg>
                <span>News</span>
              </a>
            </li>
            <li>
              <a href="/communities" className="d-flex flex-row align-items-center ">
                <svg width="24" height="24">
                  <path d="M17 13c-1.8 0-3.5.9-4.5 2.5L9.9 14c.5-.7.7-1.5.7-2.3 0-.9-.3-1.7-.8-2.4L12.3 7c.7.6 1.5.9 2.4.9 2 0 3.6-1.6 3.6-3.5S16.7.9 14.7.9s-3.6 1.6-3.6 3.5c0 .6.1 1.1.4 1.6L9 8.4c-.8-.7-1.8-1-2.8-1-2.4 0-4.4 1.9-4.4 4.3s2 4.3 4.4 4.3c1.1 0 2.1-.4 2.9-1.1l2.9 1.7c-.2.5-.3 1-.3 1.6 0 2.8 2.4 5.2 5.2 5.2s5.2-2.3 5.2-5.2S19.9 13 17 13zm4 5.2c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4zM9.4 11.7c0 1.7-1.4 3.1-3.2 3.1S3 13.4 3 11.7C3 10 4.4 8.6 6.2 8.6s3.2 1.4 3.2 3.1zm3-7.3c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.4 1 2.4 2.3S16 6.7 14.7 6.7s-2.3-1-2.3-2.3z" />
                </svg>
                <span>Communities</span>
              </a>
            </li>
            <li>
              <a href="/amas" className="d-flex flex-row align-items-center ">
                <svg height="24" width="24">
                  <path d="M12.3 3C6.4 3 1.7 6.8 1.7 11.6 1.7 14 3 16.4 5.3 18l-.2 2.2c0 .2.1.4.2.5.1.1.2.1.3.1.1 0 .2 0 .3-.1L8 19.4c1.4.5 2.8.7 4.3.7 5.8 0 10.6-3.8 10.6-8.6 0-4.7-4.8-8.5-10.6-8.5zM6.4 17.8c0-.2-.1-.4-.2-.5-2.2-1.4-3.4-3.5-3.4-5.7C2.7 7.4 7 4 12.3 4s9.6 3.4 9.6 7.5-4.3 7.5-9.6 7.5c-1.4 0-2.8-.3-4.2-.8-.1-.1-.3 0-.5 0l-1.4.9.2-1.3zm1.2-8.6c0-.3.2-.5.5-.5h8.5c.3 0 .5.2.5.5s-.2.5-.5.5H8.2c-.3 0-.6-.2-.6-.5zm0 4.6c0-.3.2-.5.5-.5H10c.3 0 .5.2.5.5s-.2.5-.5.5H8.1c-.3.1-.5-.2-.5-.5zm8.7 0c0 .3-.2.5-.5.5h-4.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h4.1c.2 0 .5.2.5.5zm-8.7-2.2c0-.3.2-.5.5-.5h3.3c.3 0 .5.2.5.5s-.2.5-.5.5H8.2c-.3 0-.6-.3-.6-.5zm6 .5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1.6c.3 0 .5.2.5.5s-.2.5-.5.5h-1.6z" />
                </svg>
                <span>AMAs</span>
              </a>
            </li>
            <li>
              <a href="/crypto-rewards" className="d-flex flex-row align-items-center ">
                <svg width="24" height="24">
                  <g fill="none" fillRule="evenodd">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <g
                      stroke="#414042"
                      strokeWidth=".818"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4.05 5.093h16.896v16.89H4.05z" />
                      <path d="M13.025 12.6c-1.155-.51-1.35-.782-1.35-1.2 0-.388.263-.803 1.003-.803.745 0 1.214.286 1.414.408.082.05.18.058.268.024a.332.332 0 0 0 .191-.2l.313-.879c.055-.155.047-.331-.088-.416-.434-.27-.998-.432-1.416-.49v-.97c0-.19-.243-.269-.42-.269h-.774c-.178 0-.266.08-.266.268v1.065c-1.251.307-1.913 1.232-1.913 2.421 0 .65.199 1.184.637 1.632.354.362.86.676 1.603.987 1.064.46 1.207.88 1.207 1.266 0 .575-.47.962-1.167.962-.569 0-1.16-.188-1.621-.515a.305.305 0 0 0-.28-.04.332.332 0 0 0-.2.21l-.3.89c-.05.145-.035.306.082.395.432.328 1.17.563 1.744.63v1.02c0 .19.209.31.386.31h.787c.177 0 .339-.12.339-.31v-1.105c1.2-.32 1.964-1.311 1.964-2.54 0-.85-.252-1.93-2.143-2.75zM14.012 2.028h2.712l4.224 3.065M4.047 5.121L8.64 2.028h3.755" />
                    </g>
                  </g>
                </svg>
                <span>Crypto Rewards</span>
              </a>
            </li>
            <li className="dropright">
              <a href="#" className="d-flex flex-row align-items-center" data-toggle="dropdown">
                <svg width="24" height="24">
                  <path d="M5.7 14.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c-.1 1.2-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3S7 13 7 12.3 6.4 11 5.7 11zm6.1 3.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2-.1 1.2-1.1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3zm6 3.5c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3z" />
                </svg>
                <span>More</span>
              </a>
              <div className="dropdown-menu">
                <a href="/saved" className="dropdown-item">
                  <span>Saved</span>
                </a>
                <a href="/about" className="dropdown-item">
                  <span>About</span>
                </a>
                <a href="/about#jobs" className="dropdown-item">
                  <span>Jobs</span>
                </a>
                <a href="/guidelines" className="dropdown-item">
                  <span>Community Guidelines</span>
                </a>
                <a href="/media" className="dropdown-item">
                  <span>Media and logos</span>
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default MainHeader;
