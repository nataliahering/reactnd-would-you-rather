import React, { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { handleVoteQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
}))


export default function VoteQuestion(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { id, optionOne, optionTwo } = useSelector(state => {
    const { id, optionOne: { text: optionOne }, optionTwo: { text: optionTwo } } = state.questions[props.id]
    return { id, optionOne, optionTwo }
  })
  const [toHome, setToHome] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleVoteQuestion({
      questionId: id,
      vote: selectedOption
    }))
    setToHome(true)
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value)
  }

  if (toHome === true) {
    return <Redirect to='/' />
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <FormControl component='fieldset' className={classes.formControl}>
          <FormLabel component='legend'>Would you rather...</FormLabel>
          <RadioGroup aria-label='quiz' name='quiz' onChange={handleRadioChange}>
            <FormControlLabel value='optionOne' control={<Radio />} label={optionOne} />
            <FormControlLabel value='optionTwo' control={<Radio />} label={optionTwo} />
          </RadioGroup>
          <Button type='submit' variant='contained' color='secondary'>
            Submit
          </Button>
        </FormControl>
      </form>
    </Fragment>
  )
}