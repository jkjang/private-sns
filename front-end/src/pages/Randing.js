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
      <div>
        <MainHeader />
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadDocuments })(Randing);
