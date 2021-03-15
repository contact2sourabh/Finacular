import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import '../index.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    maxHeight: 200,

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Bottom() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="money" >
        <Card className={classes.root}>
          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Asset Balance "
            titleTypographyProps={{ variant: 'p' }}
          />
          <CardContent>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField type="text" id="standard-basic" label="Enter amount" />
            </form>
          </CardContent>
          <CardContent>
            <p>Last updated <span style={{ color: "grey", }}> 3 dec </span>  </p>

          </CardContent>
        </Card>
      </div>
      <div className="finance" >
        <Card className={classes.root}>
          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            titleTypographyProps={{ variant: 'p' }}
            title="financial Independence "

          />

          <CardContent>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField type="number" id="standard-basic" label="Age" />
            </form>
          </CardContent>

        </Card>
      </div>

      <div className="inflation" >
        <Card className={classes.root}>
          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            titleTypographyProps={{ variant: 'p' }}
            title="Growth Rate"

          />

          <CardContent>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField type="number" id="standard-basic" label="Enter Growth Rate" />
            </form>
          </CardContent>

        </Card>
      </div>

      <div className="expense" >
        <Card className={classes.root}>
          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            titleTypographyProps={{ variant: 'p' }}
            title="Average Expenses"

          />

          <CardContent>

            <form className={classes.root} noValidate autoComplete="off">
              <TextField type="number" id="standard-basic" label="Amount" />
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="investment" >
        <Card className={classes.root}>
          <CardHeader

            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            titleTypographyProps={{ variant: 'p' }}
            title="Major Investments"

          />

          <CardContent>
            <p> Returns generated per month </p>
          </CardContent>

          <CardContent>
            <h5  > <span style={{ color: "blue", }}> ₹ 1,25,000 </span></h5>
          </CardContent>
          <CardContent>

          </CardContent>
          <CardContent>

          </CardContent>
          <CardContent>

          </CardContent>
        </Card>

      </div>
    </>
  );
}
