import * as React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  root: {
    minWidth: 120,
  },
});

export default function BasicSelect() {
  const classes = useStyles();
  const [state, setState] = useState({
    fname: "",
    lname: "",
    gender: "",
    age: "",
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <h1>Add New Patient Data</h1>
      <form>
        <label>
          First Name:{" "}
          <input type="text" name="fname" value={state.fname} onChange={handleChange} />
        </label>{" "}
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
        <label>
        Gender
        <select
          name="gender"
          value={state.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
          Age:{" "}
          <input
            type="text"
            name="age"
            value={state.age}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}