import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainSidebar from 'components/base/MainSidebar';
import loadDocuments from 'redux/actions/actions';
import PageTemplate from 'components/base/PageTemplate';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this.props.loadDocuments();
  }
  render() {
    return <PageTemplate header={<MainSidebar />} />;
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
