import { FC } from 'react';
import { useTickets } from '../../hooks/useTickets';
import { CenteredCircularProgress } from '../CenteredCircularProgress';
import { NothingFound } from '../NothingFound';
import { ListItem } from './ListItem';
import { Box, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 49px)',
      overflowY: 'scroll',
    },
    listItem: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
  })
);

type ListBodyProps = {};

const ListBody: FC<ListBodyProps> = () => {
  const classes = useStyles();
  const { isLoading, data: tickets } = useTickets();

  const isEmptyContent = !isLoading && !tickets?.length;

  return (
    <Box className={classes.root}>
      {isLoading && <CenteredCircularProgress />}
      {isEmptyContent ? <NothingFound /> : tickets?.map((ticket) => <ListItem key={ticket.id} {...ticket} />)}
    </Box>
  );
};

export { ListBody };
