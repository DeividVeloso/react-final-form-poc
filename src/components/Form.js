import React from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from './TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: 'auto',
    alignItems: 'center',
    border: '3px solid red'
  },
  children: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    marginTop: 30
  }
});

const validate = values => {
  const errors = {};
  if (!values.first) {
    errors.first = 'Required';
  }
  if (!values.last) {
    errors.last = 'Required';
  }

  return errors;
};



const MyForm = ({ classes, onSubmit  }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    render={props => {
      return (
        <form className={classes.container} onSubmit={props.handleSubmit}>
          <h2>Simple Default Input</h2>
          <div>
            <Field
              name="first"
              type="text"
              component={TextField}
              placeholder="First Name"
            />
          </div>
          <div>
            <Field
              name="last"
              component={TextField}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <button type="submit" disabled={props.pristine || props.invalid}>
            Submit
          </button>
        </form>
      );
    }}
  />
);

export default withStyles(styles)(MyForm);
