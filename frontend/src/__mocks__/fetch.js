'use strict';

const polls = {
  _items: [
    {
      title: 'Poll 1',
      _id: 'poll1',
      initiator: {name: 'John Doe'},
      _created: 'date'
    },
    {
      title: 'Poll 2',
      _id: 'poll2',
      initiator: {name: 'John Doe'},
      _created: 'date'
    }
  ]
};

export default function fetch(url) {
  return new Promise((resolve, reject) => {
    resolve({
      // The actual response
      _id: '123',
      // HTTP Status Code
      status: 200,
      // The response needs to have a .json() method
      json: () => { return polls}
    });
  });
}
