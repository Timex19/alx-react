import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe('CourseListRow component when isHeader prop is true', () => {
  it('renders one cell with colspan=2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test run"/>)
    // console.log(wrapper.html())
    expect(wrapper.html()).toBe('<tr style="background:#deb5b545"><th colSpan="2">Test run</th></tr>')

  })

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test run" textSecondCell="Test run"/>)
    // console.log(wrapper.html())
    expect(wrapper.find('tr').children().length).toEqual(2);
    expect(wrapper.html()).toBe('<tr style="background:#deb5b545"><th>Test run</th><th>Test run</th></tr>')
  })
})

describe('CourseListRow component when isHeader prop is false', () => {
  it(' renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test run"/>)
    // console.log(wrapper.html())
    expect(wrapper.find('tr').children().length).toEqual(2);
  })
})
