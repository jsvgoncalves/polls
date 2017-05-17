import React from 'react';
import { Row, Col } from 'react-grid-system';
import {API} from './API';
import Search from './Search';


//!TODO: Fix hardcoded links.
//       Possibly extract it to API and have only `/polls` here?
//       or make a `getAllPolls()` call
//!TODO: Do something more appropriate then just
//       logging the error.
class Polls extends React.Component {
  constructor (props) {
    super(props);
    this.state = {items: []}
    this.updateItems = this.updateItems.bind(this);
    this.searchUpdate = this.searchUpdate.bind(this);
  }
  updateItems (items) {
    this.setState({items})
  }
  componentWillMount () {
    API.fetch(`${this.props.url}/polls`)
       .then(({_items: items}) => this.updateItems(items))
       .catch((e) => console.log(e));
  }
  searchUpdate(s) {
    // "title": {"$regex": ".*a.*"}
    const query = `${this.props.url}/polls?where={"title": {"$regex": ".*${s}.*"}}`;
    API.fetch(query)
       .then(({_items: items}) => this.updateItems(items))
       .catch((e) => console.log(e));
  }
  render () {
    let items = this.state.items;
    return (
      <div>
      <Row>
        <Col xs={12} md={12}><Search update={this.searchUpdate.bind(this)}/></Col>
      </Row>
      {items.map(item =>
        (<Row key={item._id} className="poll">
          <Col><Poll poll={item} /></Col>
        </Row>)
      )}
      </div>
    );
  }
}

const Poll = (props) => (
  <div>
    <Row>
      <Col className="poll-field"><strong>{props.poll.title}</strong></Col>
    </Row>
    <Row>
      <Col className="poll-field" xs={12} md={6}>{props.poll.initiator.name}</Col>
      <Col className="poll-field" xs={12} offset={{ md: 1 }} md={5}>{props.poll._created}</Col>
    </Row>
    <Row>
      <Col className="poll-field">{props.poll.description || <em>No description provided</em>}</Col>
    </Row>
  </div>);

export default Polls;
