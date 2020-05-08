import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import StarIcon from '@material-ui/icons/Star';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  question: {
    variant: 'h5',
    component: 'h2',
    align: 'center'
  },
  results: {
    variant: 'h5',
    component: 'h2',
    align: 'right'
  },
  title: {
    marginBottom: 12,
  },
});

function renderYourReply() {
  return (
    <Grid item xs={6}>
      <Box color="secondary.main">your reply
        <StarIcon color='secondary'/>
        </Box>
    </Grid>
  )
}

function getData(state, props) {
  const { optionOne, optionTwo } = state.questions[props.id];
  const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  const q1 = {
    text: optionOne.text,
    votes: optionOne.votes.length,
    percentage: Math.round(optionOne.votes.length*100/totalVotes),
  }
  const q2 = {
    text: optionTwo.text,
    votes: optionTwo.votes.length,
    percentage: Math.round(optionTwo.votes.length*100/totalVotes)
  }
  //TODO update
  const authedUser = 'tylermcginnis'
  const authedUserVote = optionOne.votes.includes(authedUser)
                        ? 1
                        :(optionTwo.votes.includes(authedUser)
                          ? 2
                          : 0)
  return { q1, q2, authedUserVote, totalVotes }
}

export default function QuestionResults(props) {
  const classes = useStyles();
  const { q1, q2, authedUserVote, totalVotes } = useSelector(state => getData(state, props));

  return (
    <Fragment>
      <Typography className={classes.title} color="textSecondary" align='center'>
        Would you rather
      </Typography>
      <Divider variant="inset"/>
      <Typography variant="h6" component="h2" align='center'>
        {q1.text}
        {authedUserVote===1 && renderYourReply()}
      </Typography>
      <Typography variant="body1" component="h2" align='right'>
        {q1.percentage} %
      </Typography>
      <Typography variant="body1" component="h2" align='right'>
        {q1.votes} out of {totalVotes}
      </Typography>
      <Divider variant="inset"/>
      <Typography variant="h6" component="h2" align='center'>
        {q2.text}
        {authedUserVote===2 && renderYourReply()}
      </Typography>
      <Typography variant="body1" component="h2" align='right'>
        {q2.percentage} %
      </Typography>
      <Typography variant="body1" component="h2" align='right'>
        {q2.votes} out of {totalVotes}
      </Typography>
      <Divider variant="inset"/>
    </Fragment>
  );
}