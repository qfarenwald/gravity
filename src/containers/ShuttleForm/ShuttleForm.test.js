import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { ShuttleForm, mapDispatchToProps, mapStateToProps } from './ShuttleForm';
import { makeBooking } from '../../actions/index';

describe('ShuttleForm', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ShuttleForm />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should set state of name when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'name',
        value: 'Quinne',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('name')).toEqual(inputEvent.target.value);
  });

  it('should set state of email when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'email',
        value: 'q.farenwald@gmail.com',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('email')).toEqual(inputEvent.target.value);
  });

  it('should set state of riders when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'riders',
        value: '5',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('riders')).toEqual(inputEvent.target.value);
  });

  it('should set state of bikes when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'bikes',
        value: '5',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('bikes')).toEqual(inputEvent.target.value);
  });

  it('should set state of date when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'date',
        value: '1111',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('date')).toEqual(inputEvent.target.value);
  });

  it('should set state of start time when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'starttime',
        value: '1100',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('starttime')).toEqual(inputEvent.target.value);
  });

  it('should set state of end time when handleChange is called with an input event', () => {
    const wrapper = shallow(<ShuttleForm />);
    const inputEvent = {
      target: {
        name: 'endtime',
        value: '400',
      },
    };

    wrapper.instance().handleChange(inputEvent);

    expect(wrapper.state('endtime')).toEqual(inputEvent.target.value);
  });

  it('should set state of redirect when setRedirect is called with a click event', () => {
    const wrapper = shallow(<ShuttleForm makeBooking={makeBooking}/>);
    const clickEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'redirect',
        value: true,
      },
    };

    wrapper.instance().handleSubmit(clickEvent);

    expect(wrapper.state('redirect')).toEqual(clickEvent.target.value);
  });

  it('should call handleSubmit when the login button is clicked', () => {
    const wrapper = shallow(<ShuttleForm makeBooking={makeBooking}/>);
    const mockEvent = { preventDefault: jest.fn() };
    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().makeBooking = jest.fn();

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  it('calls dispatch with an makeBooking action when handleSubmit is called', () => {
    const mockDispatch = jest.fn();
    const mockBooking = {
      name: 'Dan LeFever',
      email: 'dt.lefever@gmail.com',
      riders: '5',
      bikes: '5',
      date: '1106',
      starttime: '1100',
      endtime: '430',
      formReady: true,
      redirect: false,
    };
    const actionToDispatch = makeBooking('MAKE_BOOKING', mockBooking);
    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.makeBooking('MAKE_BOOKING', mockBooking);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
