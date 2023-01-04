import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

export default ({
  isOpen,
  maxWidth,
  fullWidth,
  title,
  contentText,
  children,
  actions,
  onOutsideOfTheDialogClicked,
}) => {
  return (
    <Dialog
      open={isOpen}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      onClose={onOutsideOfTheDialogClicked}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          {contentText}
        </DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
