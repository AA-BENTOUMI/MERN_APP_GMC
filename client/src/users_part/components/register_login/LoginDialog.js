import React, { useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../JS/actions/user";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withRouter } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
});

function LoginDialog(props) {
  const {
    history,
    classes,
    onClose,
    openChangePasswordDialog,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);

const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = () => {
    dispatch(login(user, history,onClose));
    setUser({ email: "", password: "" });
  };
  
  return (
    <Fragment>
      <FormDialog
        open
        onClose={onClose}
        loading={isLoading}
        onFormSubmit={(e) => {
          e.preventDefault();
          handleUser();
        }}
        hideBackdrop
        headline="Login"
        content={
          <Fragment>
            <TextField
            name="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              inputRef={loginEmail}
              autoFocus
              autoComplete="off"
              type="email"
              onChange={handleChange}
            />
            <VisibilityPasswordTextField
              password="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              inputRef={loginPassword}
              autoComplete="off"
              type="text"
              onChange={handleChange}
              onVisibilityChange={setIsPasswordVisible}
              isVisible={isPasswordVisible}
            />
            <FormControlLabel
              className={classes.formControlLabel}
              control={<Checkbox color="primary" />}
              label={<Typography variant="body1">Remember me</Typography>}
            />
            
          </Fragment>
        }
        actions={
          <Fragment>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              size="large"
            >
              Login
            </Button>
            <Typography
              align="center"
              className={classNames(
                classes.forgotPassword,
                isLoading ? classes.disabledText : null
              )}
              color="primary"
              onClick={isLoading ? null : openChangePasswordDialog}
              tabIndex={0}
              role="button"
              onKeyDown={(event) => {
                // For screenreaders listen to space and enter events
                if (
                  (!isLoading && event.keyCode === 13) ||
                  event.keyCode === 32
                ) {
                  openChangePasswordDialog();
                }
              }}
            >
              Forgot Password?
            </Typography>
          </Fragment>
        }
      />
    </Fragment>
  );
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  status: PropTypes.string,
};

export default withRouter(withStyles(styles)(LoginDialog));
