import React from 'react';
import {mount} from 'enzyme'
import toJson from 'enzyme-to-json';
import Search from '../Search'

describe('Search', () => {
  it('updates the state based on the input', () => {
    const query = 'something';
    const wrapper = mount(
      <Search />
    );
    // Set the input value
    wrapper.find('input').simulate('change', {target: {value: query}});
    // Look at the state
    expect(wrapper.state('search')).toEqual(query);
  });

  it('submits the form if the search string lenght is > 2', () => {
    const query = '123'
    const callback = jest.genMockFunction();
    const wrapper = mount(
      <Search update={callback}/>
    );
    // Need to provide a min lenght of 3 to the search query
    wrapper.find('input').simulate('change', {target: {value: query}});
    // Make sure the callback method was called
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(query);
  });

  it("doesn't submit the form if the query lenght is < 3", () => {
    const callback = jest.genMockFunction();
    const wrapper = mount(
      <Search update={callback}/>
    );
    wrapper.find('input').simulate('change', {target: {value: '12'}});
    // Make sure the callback method *not* was called
    wrapper.find('button').simulate('click');
    expect(callback).not.toHaveBeenCalled();
  });

});
