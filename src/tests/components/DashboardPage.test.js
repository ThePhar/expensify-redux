import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/DashboardPage/DashboardPage";

test("Should render DashboardPage.", () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
});