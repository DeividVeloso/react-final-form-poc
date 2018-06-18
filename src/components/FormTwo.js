import React from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import TextField from './TextField';
import Checkbox from './Checkbox';

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
  console.log("Validate", values)
  const errors = {};
  if (!values.slug) {
    errors.slug = 'Required';
  }
  if (!values.accept) {
    errors.accept = 'Required';
  }

  return errors;
};



const MyFormTwo = ({ classes, onSubmit, initialValues }) => (
  <Form
    onSubmit={onSubmit}
    validate={validate}
    initialValues={initialValues}
    render={props => {
      return (
        <form className={classes.container} onSubmit={props.handleSubmit}>
          <div>
            <Field
              name="slug"
              type="text"
              component={TextField}
              placeholder="Slug Name"
            />
          </div>
          <div>
            <Field
              name="accept"
              component={Checkbox}
              type="checkbox"
            />
          </div>

          <button type="submit" disabled={props.pristine || props.invalid}>
            Finish
          </button>
        </form>
      );
    }}
  />
);

export default withStyles(styles)(MyFormTwo);
