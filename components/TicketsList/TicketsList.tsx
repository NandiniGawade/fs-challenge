import { FC } from 'react';
import { Box, createStyles, makeStyles } from '@material-ui/core';
import { ListHeader } from './ListHeader';
import { ListBody } from './ListBody';
import { isMobileDevice } from '../../hooks/verifyDevice';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 66px)',
      padding: theme.spacing(3),
    },
    list: {
      height: '100%',
      background: '#FFFFFF',
      borderRadius: 15,
      padding: theme.spacing(2, 3, 4),
    },
  })
);

const TicketsList: FC = () => {
  const classes = useStyles();
  const isMobile = isMobileDevice();
  
  return (
    <Box component="main" className={classes.root}>
      <Box className={classes.list}>
      { isMobile == false && <ListHeader />}
        <ListBody/>
      </Box>
    </Box>
  );
};

export { TicketsList };
