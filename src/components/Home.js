import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector } from 'react-redux';
import { pick } from 'lodash';
import PreviewQuestion from './PreviewQuestion';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function groupQuestions({ questions, authedUser }) {
  //TODO update
  authedUser = 'tylermcginnis'
  let answeredQuestions = [];
  let unansweredQuestions = [];
  const propertiesToPick = ['id', 'author', 'timestamp'];

  Object.values(questions).forEach(question => {
    if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
      answeredQuestions.push(pick(question, propertiesToPick))
    } else {
      unansweredQuestions.push(pick(question, propertiesToPick))
    }
  });
  answeredQuestions = answeredQuestions.sort((q1, q2) => q2.timestamp - q1.timestamp);
  unansweredQuestions = unansweredQuestions.sort((q1, q2) => q2.timestamp - q1.timestamp);
  
  return { answeredQuestions, unansweredQuestions }
}

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const { answeredQuestions, unansweredQuestions } = useSelector(
    state => groupQuestions({ questions: state.questions, authedUser: state.authedUser })
    );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
          >
          <Tab label="Answered Questions" {...a11yProps(0)} />
          <Tab label="Unanswered Questions" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <List className={classes.root}>
        {answeredQuestions.map(q => {
          return (
            <Fragment>
              <PreviewQuestion id={q.id} />
              <Divider variant="inset" component="li" />
            </Fragment>
          );
        })}
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List className={classes.root}>
        {unansweredQuestions.map(q => {
          return (
            <Fragment>
              <PreviewQuestion id={q.id} />
              <Divider variant="inset" component="li" />
            </Fragment>
          );
        })}
        </List>
      </TabPanel>
    </div>
  );
}