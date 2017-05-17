import {API, APIError} from '../API'


describe("API", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            // The actual response
            _id: '123',
            // HTTP Status Code
            status: 200,
            // The response needs to have a .json() method
            json: () => { return {_id: '123'}}
          });
        });
    });
  });

  it("should fetch something", async () => {
    expect.assertions(1);
    return API.fetch('http://some-url.org')
       .then(res => expect(res._id).toBe('123'));
  });

});

describe("HTTP Error handling", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve({
            // The actual response
            _id: '123',
            // HTTP Status Code
            status: 400,
            // The response needs to have a .json() method
            json: () => { return {_id: '123'}}
          });
        });
    });
  });

  it("should throw Errors based on HTTP status code", () => {
    expect.assertions(0);
    return API.fetch('http://some-url.org')
           .then(res => fail('Expected: reject exception. Received: resolve.'))
           .catch(e => e);
  });
});
