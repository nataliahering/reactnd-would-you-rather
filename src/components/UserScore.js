import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function UserScore(props) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={props.userScore.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={props.userScore.name}
        secondary={
          <React.Fragment>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Answered Questions: {props.userScore.numberOfAnswers}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Created Questions: {props.userScore.numberOfQuestions}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  SCORE: {props.userScore.numberOfAnswers + props.userScore.numberOfQuestions}
                </Typography>
              </ListItem>
            </List>
          </React.Fragment>
        }
      />
    </ListItem>
    );
}