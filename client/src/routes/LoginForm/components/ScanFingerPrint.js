import React, { Fragment } from 'react';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import styled from 'styled-components';

const FlexDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
`;


const ScanFingerPrintPopup = ({
  open, handleClose, fingerPrintAcion, languageText,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <Fragment>
        <DialogTitle id='alert-dialog-title'>{languageText.header}</DialogTitle>
        <FlexDialogContent>
          <DialogContentText id='alert-dialog-description'>
            {languageText.description}
          </DialogContentText>

          <Iframe
            url='https://lottiefiles.com/iframe/663-fingerprint-scan'
            width='300px'
            height='250px'
            styles={{ overflowX: 'hidden' }}
            display='initial'
            position='relative'
          />
          <div>
            <Button
              onClick={fingerPrintAcion}
              fullWidth
              variant='contained'
              color='primary'
            >
              {languageText.scanBtn}
            </Button>
          </div>
        </FlexDialogContent>
      </Fragment>
      <DialogActions>
        <Button
          onClick={handleClose}
          color='primary'
        >
          {languageText.closeBtn}
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default ScanFingerPrintPopup;
