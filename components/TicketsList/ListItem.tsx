import React, { FC, useState } from 'react';
import { Chip, createStyles, Grid, makeStyles, Typography } from '@material-ui/core';
import { Ticket } from '../../shared/types';
import { format } from 'date-fns';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button} from '@material-ui/core';
import { deleteTicket } from '../../hooks/deleteTicket';
import { Alert, Snackbar } from '@mui/material';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
    status_open: {
      backgroundColor: '#5B994C'
    },
    status_close: {
      backgroundColor: 'gray',
    },
    delete_icon: {
      borderRadius: '5px',
      border: '1px solid #808080',
      marginLeft: '13%'
    },
  })
);

const formatToDate = (date: string) => {
  return format(new Date(date), 'dd/MM/yyyy');
};

const deleteRecord = async (id: number) => {
  const response = await deleteTicket(id);
  return response.data;
}

const ListItem: FC<Ticket> = ({ id, user, status, createdAt, dueDate }) => {
  const classes = useStyles();

  const createdAtFormatted = formatToDate(createdAt);
  const dueDateFormatted = formatToDate(dueDate);
  const statusBackgroundColor = status === 'OPEN' ? classes.status_open : classes.status_close;

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [message, setMessage] = useState('');


  const vertical = 'top';
  const horizontal = 'center';

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsOpen(false);
    setIsErrorOpen(false);
  };

  const handleConfirm = () => {
    setOpen(false);
    deleteRecord(id).then(res => {
      setIsOpen(true);
      setMessage('Record deleted successfully')
    }).catch(error => {
      setIsErrorOpen(true);
      setMessage('Something went wrong!!. Please contact with System Administrator. ')
    });
  }

  return (
    <React.Fragment>
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
          <Alert onClose={handleClose}  variant="filled" severity="success" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
        <Snackbar open={isErrorOpen} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }}>
          <Alert onClose={handleClose}  variant="filled" severity="error" sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>

        <Grid container className={classes.root}>
          <Grid item xs={1}>
            <Typography className={classes.text}>{id}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography className={classes.text}>{`${user.firstName} ${user.lastName}`}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>{createdAtFormatted}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography className={classes.text}>{dueDateFormatted}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Chip label={status} className={[classes.status, statusBackgroundColor].join(' ')} />
          </Grid>
          <Grid item xs={2}>
          <Typography><DeleteOutlined className={classes.delete_icon} onClick={handleClickOpen}/></Typography>
          </Grid>
        </Grid>

        <Dialog open={open} maxWidth="sm" fullWidth>
          <DialogTitle>Are you sure ?</DialogTitle>
          <DialogContent>
            <Typography>You want to delete {`${user.firstName} ${user.lastName}`} record ?</Typography>
          </DialogContent>
          <DialogActions>
            <Button  variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button color="secondary" variant="contained" onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
    </React.Fragment>
    
  );
};

export { ListItem };
