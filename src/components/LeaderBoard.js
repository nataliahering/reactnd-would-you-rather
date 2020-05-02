import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserScore from './UserScore'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function LeaderBoard() {
  const classes = useStyles();
  const userScores = useSelector(state => {
    var { users } = state;
    return Object.values(users).map(user => {
        return {
          id: user.id,
          name: user.name,
          avatar: user.avatarURL,
          numberOfAnswers: Object.keys(user.answers).length,
          numberOfQuestions: user.questions.length
        }
      }).sort((user1, user2) => (
        (user2.numberOfAnswers + user2.numberOfQuestions) - (user1.numberOfAnswers + user1.numberOfQuestions)
      ))
    });

  return (
    <List className={classes.root}>
      {userScores.map(userScore => {
        return (
          <Fragment>
            <UserScore userScore={userScore} />
            <Divider variant="inset" component="li" />
          </Fragment>
        );
      })}
    </List>
  );
}