import React, { useState, useRef, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../JS/actions/user";
import {  useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { 
  TextField,
  Button,
  FormControlLabel,
  withStyles,
  Radio,
  FormLabel,
  RadioGroup
} from "@material-ui/core";
import FormDialog from "../../../shared/components/FormDialog";
import ButtonCircularProgress from "../../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../../shared/components/VisibilityPasswordTextField";

const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
});

function RegisterDialog(props) {
  const { onClose, } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const registerPassword = useRef();
const [user, setUser] = useState({
  name: "",
  email: "",
  password: "",
  role: "buyer",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
   const handleUser = (e) => {
    dispatch(register(user, history,onClose));
    setUser({
      name: "",
      email: "",
      password: "",
      role: "buyer",
    });
  };
  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Register"
      onFormSubmit={(e) => {
        e.preventDefault();
        handleUser();
      }}
      hideBackdrop
      hasCloseIcon
      content={
        <Fragment>
          <TextField
            name="name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="your name"
            autoFocus
            autoComplete="off"
            type="text"
            onChange={handleChange}
          />
          <TextField
            name="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            autoComplete="off"
            type="email"
            onChange={handleChange}
          />
          <VisibilityPasswordTextField
            name="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            inputRef={registerPassword}
            autoComplete="off"
            onChange={handleChange}
            FormHelperTextProps={{ error: true }}
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
          />
           <FormLabel component="legend">Role</FormLabel>
  <RadioGroup
    aria-label="buyer"
    defaultValue="buyer"
    name="role"
    onChange={handleChange}
  >
    <FormControlLabel value="buyer" control={<Radio />} label="buyer" />
    <FormControlLabel value="seller" control={<Radio />} label="seller" />
  </RadioGroup>   
        </Fragment>
      }
      actions={
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          color="secondary"
          disabled={isLoading}
        >
          Register
          {isLoading && <ButtonCircularProgress />}
        </Button>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);
