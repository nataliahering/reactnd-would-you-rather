import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Error404 from './Error404'
import QuestionResults from './QuestionResults'
import VoteQuestion from './VoteQuestion'
import { isEmpty } from 'lodash'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function QuestionDetails(props) {
  const classes = useStyles();
  const questionId = props.match.params.question_id;
  const { result: { author, avatar, hasReplied } = {}, notFound = false } = useSelector(state => {
    if (!questionId || !state.questions[questionId]) {
      return { notFound: true }
    }

    const { author } = state.questions[questionId]
    const { avatarURL: avatar } = state.users[author]
    //TODO update
    const authedUser = "tylermcginnis"
    const hasReplied = state.users[authedUser].answers[questionId] != null
    
    return { result: { author, avatar, hasReplied }}
  });

  if (notFound) {
    return (<Error404 />)
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar src={avatar} />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Asked by {author}
        </Typography>
        { hasReplied ? <QuestionResults id={questionId}/> : <VoteQuestion id={questionId}/>}
      </CardContent>
    </Card>
  );
}