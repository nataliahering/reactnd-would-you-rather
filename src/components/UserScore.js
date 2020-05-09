import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  block: {
    display: 'block',
  },
}))

export default function UserScore(props) {
  const classes = useStyles()

  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar src={props.userScore.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={props.userScore.name}
        secondary={
          <Fragment>
            <Typography
              component='span'
              variant='body2'
              className={classes.block}
              color='textPrimary'
            >
              Answered Questions: {props.userScore.numberOfAnswers}
            </Typography>
            <Typography
              component='span'
              variant='body2'
              className={classes.block}
              color='textPrimary'
            >
              Created Questions: {props.userScore.numberOfQuestions}
            </Typography>
            <Typography
              component='span'
              variant='body1'
              className={classes.block}
              color='textPrimary'
            >
              Score: {props.userScore.numberOfAnswers + props.userScore.numberOfQuestions}
            </Typography>
          </Fragment>
        }
      />
    </ListItem>
  )
}