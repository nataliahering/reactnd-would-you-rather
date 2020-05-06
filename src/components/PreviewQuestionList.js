import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { pick } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PreviewQuestion from './PreviewQuestion';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function filterQuestions({ questions, authedUser, category }) {
  //TODO update
  authedUser = 'tylermcginnis'
  let filteredQuestions = [];
  const propertiesToPick = ['id', 'author', 'timestamp'];

  Object.values(filteredQuestions).forEach(question => {
    const hasAnswered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);
    switch(category) {
      case 'answered' :
        if (hasAnswered) {
          filteredQuestions.push(pick(question, propertiesToPick))
        }
        break;
      case 'unanswered' : 
        if (!hasAnswered) {
          filteredQuestions.push(pick(question, propertiesToPick))
        }
        break;
      default :
        return filteredQuestions
    }
  });
  
  return filteredQuestions;
}

export default function PreviewQuestionList(props) {
  const classes = useStyles();
  const questions = useSelector(
    state => filterQuestions({ questions: state.questions, authedUser: state.authedUser, category: props.category })
    );

  return (
    <div>
      <List className={classes.root}>
        {questions.map(q => {
          return (
            <Fragment key={q.id}>
              123
              {/* { <PreviewQuestion id={q.id} /> }
              <Divider variant="inset" component="li" /> */}
            </Fragment>
          );
        })}
      </List>
    </div>
  );
}