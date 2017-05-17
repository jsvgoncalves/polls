import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json';
import Polls from '../Polls'

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

describe('Polls', () => {
  it('renders correctly', () => {
    const pp = mount(
      <Polls />
    );
    pp.instance().updateItems(polls._items)
    expect(toJson(pp)).toMatchSnapshot();
  });

  it('requests updated polls', () => {
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            // The actual response
            _id: '123',
            // HTTP Status Code
            status: 200,
            // The response needs to have a .json() method
            json: () => { return polls }
          });
        });
    });
    expect.assertions(1);
    const div = document.createElement('div');
    ReactDOM.render(<Polls />, div);
    expect(fetch).toHaveBeenCalled();
  });
});
