import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import { setValue } from './actions/inputgrid'
import inputgrid, { DEFAULT_VALUE } from './reducers/inputgrid'
import InputField from './InputField'
import Output from './Output'

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
  const index = 1, value = 30
  expect(inputgrid(DEFAULT_VALUE, setValue(index, value))).toEqual([{
    value : 0
  }, {
    value : 30
  }, {
    value : 0
  }])
})

it("<InputField/> shows the proper value", () => {
  const wrapper = render(
    <Provider store={store}>
      <InputField index={1} />
    </Provider>
  );
  expect(wrapper.find("input").prop("value")).toEqual("0");
})

it("<Output/> shows the proper value", () => {
  const wrapper = render(
    <Provider store={createStore(reducers, {
      inputgrid : [{
        value : 10
      }, {
        value : 20
      }, {
        value : 30
      }]
    })}>
      <Output/>
    </Provider>
  );
  expect(wrapper.find(".output").html()).toEqual("60");
})
