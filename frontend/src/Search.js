import React from 'react';
import { Row, Col } from 'react-grid-system';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {search: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (e) {
    this.setState({search: e.target.value});
  }
  handleSubmit (e) {
    e.preventDefault();
    // Perform searches only if our string is > 3
    const s = this.state.search;
    if (s.length >= 3 || s.length === 0) {
      this.props.update.call(this, s)
    }
  }
  render () {
    return (
      <Row className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <Col className="search-col" xs={12} offset={{ md: 4 }} md={6}>
            <input
              value={this.state.search}
              onChange={this.handleChange}
              placeholder="Search by title"/>
          </Col>
          <Col className="search-col" xs={12} md={2}>
            <button type="submit">Search</button>
          </Col>
        </form>
      </Row>
    );
  }
}

export default Search;
