import { FC } from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';
import { Logo } from './Logo';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: '#1D1F4F',
      color: '#FFFFFF',
      padding: theme.spacing(2.5, 3, 2),
    },
    title: {
      fontSize: 14,
      paddingLeft: theme.spacing(1.25),
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
      <Logo width="18" height="18" />
      <Typography variant="h1" className={classes.title}>
        Axiona-Tickets
      </Typography>
    </Box>
  );
};

export { Header };
