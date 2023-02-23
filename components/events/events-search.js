import { useRef} from 'react';

import Button from "../ui/Button";

import classes from "./events-search.module.css";

function EventSearch(props) {
    const yearDropdown = useRef();
    const monthDropdown = useRef();
    function handleSubmit(event) {
        event.preventDefault();
        console.log('yearDropdwon', yearDropdown.current.value);
        console.log('monthDropdown', monthDropdown.current.value);

        props.onSearch(yearDropdown.current.value, monthDropdown.current.value);
    }

    return (
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='year'>Year</label>
                    <select id='year' ref={yearDropdown}>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor='months'>Months</label>
                    <select id='months' ref={monthDropdown}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>
                    </select>
                </div>
            </div>
            <Button onClick={handleSubmit}>Find Events!</Button>
        </form>
    );
}

export default EventSearch;
