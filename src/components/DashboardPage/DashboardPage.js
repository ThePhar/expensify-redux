import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseListFilters from "../ExpenseListFilters/ExpenseListFilters";

const DashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;