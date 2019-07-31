import React                                                                 from 'react';
import { DateRangePicker }                                                   from 'react-dates';
import { connect }                                                           from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortByChange = (e) => {
        if (e.target.value === 'date')
            this.props.sortByDate();
        else if (e.target.value === 'amount')
            this.props.sortByAmount();
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                <select value={this.props.filters.sortBy} onChange={this.onSortByChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="start_date"
                    endDate={this.props.filters.endDate}
                    endDateId="end_date"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                    numberOfMonths={1}
                    showClearDates
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);