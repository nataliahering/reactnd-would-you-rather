import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 296,
  }
}));

export default function NewQuestion(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [toHome, setToHome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleAddQuestion({
      questionOne,
      questionTwo
    }))
    setToHome(true);
  }

  const handleQuestionOneChange = (e) => {
    setQuestionOne(e.target.value);
  }

  const handleQuestionTwoChange = (e) => {
    setQuestionTwo(e.target.value);
  }

  if (toHome === true) {
    return <Redirect to='/' />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" color="secondary">
          Create new question
        </Typography>
        <form 
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={classes.formControl}>
            <Typography
              component="span"
              variant="h6"
              className={classes.formControl}
              color="textPrimary"
            >
              Would you rather...?
            </Typography>
          </div>
          <div>
            <TextField
              className={classes.formControl}
              id="first-question"
              label="First Question"
              variant="outlined"
              color="secondary"
              required
              rowsMax="3"
              inputProps={{
                maxLength: 80
              }}
              onChange={handleQuestionOneChange}
            />
          </div>
          <div>
            <TextField
              className={classes.formControl}
              id="second-question"
              label="Second Question"
              variant="outlined"
              color="secondary"
              required
              rowsMax="3"
              inputProps={{
                maxLength: 80
              }}
              onChange={handleQuestionTwoChange}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            disabled={!questionOne || !questionTwo}
          >
            SUBMIT
          </Button>
        </form>
      </div>
    </Container>
  );
}