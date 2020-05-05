import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

export default function PreviewQuestion(props) {

  return (
    <div>
      <ListItem>
        <Typography
          component="span"
          variant="body2"
          color="textPrimary"
        >
          test {props.id}
        </Typography>
      </ListItem>
    </div>
  );
}