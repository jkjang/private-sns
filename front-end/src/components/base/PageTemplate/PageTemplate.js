// @flow
import React from 'react';
import type { Node } from 'react';
import 'components/base/PageTemplate/PageTemplate.scss';

type Props = {
  header: Node,
  topbar: Node,
  main: Node,
};

const PageTemplate = ({ header, topbar, main }: Props) => (
  <div className="main-wrapper d-flex flex-row justify-content-between">
    {header}
    <main className="main-content">
      <div>{topbar}</div>
      <div>{main}</div>
    </main>
  </div>
);

export default PageTemplate;
