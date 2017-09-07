import React from 'react';
import { shallow } from 'enzyme';

describe('<App />', () => {
  let makeSubject;
  let App;

  beforeEach(() => {
    jest.resetModules();

    App = require('../App').default;

    makeSubject = () => shallow(<App />);
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(subject.html()).toMatchSnapshot();
  });
});
