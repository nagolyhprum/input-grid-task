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
import Output, { getValue as getOutputValue, transformValue } from './Output'

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

it("get the proper output value", () => {
  expect(getOutputValue([{
    value : 10
  }, {
    value : 20
  }, {
    value : 30
  }])).toEqual("60");
})

it("handle thousand, million, billion, and trillion", () => {
  expect(transformValue(1230)).toEqual("1.23K");
  expect(transformValue(12300)).toEqual("12.3K");
  expect(transformValue(123000)).toEqual("123K");

  expect(transformValue(1230000)).toEqual("1.23M");
  expect(transformValue(12300000)).toEqual("12.3M");
  expect(transformValue(123000000)).toEqual("123M");

  expect(transformValue(1230000000)).toEqual("1.23B");
  expect(transformValue(12300000000)).toEqual("12.3B");
  expect(transformValue(123000000000)).toEqual("123B");

  expect(transformValue(1230000000000)).toEqual("1.23T");
  expect(transformValue(12300000000000)).toEqual("12.3T");
  expect(transformValue(123000000000000)).toEqual("123T");

  expect(transformValue(1234000000000)).toEqual("1.23T");
  expect(transformValue(12340000000000)).toEqual("12.3T");
  expect(transformValue(123400000000000)).toEqual("123T");
})
