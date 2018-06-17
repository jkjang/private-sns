import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainSidebar from 'components/base/MainSidebar';
import MainTopbar from 'components/base/MainTopbar';
import loadDocuments from 'redux/actions/actions';
import PageTemplate from 'components/base/PageTemplate';
import Post from 'components/post/Post';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this.props.loadDocuments();
  }
  render() {
    return <PageTemplate header={<MainSidebar />} topbar={<MainTopbar />} main={<Post />} />;
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
