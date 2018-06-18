import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadDocuments from 'redux/actions/actions';
import RandingTemplate from 'components/randing/RandingTemplate';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this.props.loadDocuments();
  }
  render() {
    return <RandingTemplate />;
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
