import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { setValue } from './actions'
import inputgrid from './reducers/inputgrid'

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(reducers)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders 3 input fields', () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".field")).toHaveLength(3);
});

it('renders 1 output', () => {
    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(".output")).toHaveLength(1);
});

it("can update the value of the state", () => {
  const state = reducers()
  const index = 1, value = 30
  expect(inputgrid(state, setValue())).toEqual([{
    value : 0
  }, {
    value : 30
  }, {
    value : 0
  }])
})
