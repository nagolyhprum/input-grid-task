import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

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
