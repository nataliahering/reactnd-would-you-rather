import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  block: {
    display: 'block',
  },
  inline: {
    display: 'inline',
  },
  link: {
    textDecoration: 'none'
  }
}))

export default function PreviewQuestion(props) {
  const classes = useStyles()

  const question = useSelector(
    state => state.questions[props.id]
    )

  return (
    <Link className={classes.link} to={`/questions/${question.id}`}>
      <ListItem alignItems='flex-start'>
        <ListItemText
          secondary={
            <Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.block}
                color='textPrimary'
              >
                {question.author} asks, would you rather:
              </Typography>
              <Typography
                component='span'
                variant='body1'
                className={classes.block}
                color='textPrimary'
              >
                {question.optionOne.text} or {question.optionTwo.text} ?
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
    </Link>
  )
}