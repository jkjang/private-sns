import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadDocuments from './../redux/actions/actions';
import MainHeader from './../components/base/MainHeader';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this
      .props
      .loadDocuments();
  }
  render() {
    // const documents = this   .props   .documents   .reverse()   .map(docment =>
    // <div>{docment.title}</div>);

    return (
      <div
        className="main-header main-header-fullwidth main-header-has-header-standard"
      >
        <MainHeader />
        <div className="header-spacer--standard" />
        <div className="content-bg-wrap bg-landing" />
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadDocuments })(Randing);
