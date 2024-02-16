import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Snackbar from '@mui/material/Snackbar';
import Portal from '@mui/material/Portal';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Const from "../static/CONST";
import Paper from '@mui/material/Paper';
import name from '../static/Name2.png'



const useStyle = styled((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      minHeight: 400,
      width: "100%",
    },
  },
  textFields: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
  errorTexts: {
    color: "#f00",
    fontSize: 12,
  },
  alertMessage: {},
}));

export default function Login(props) {
  //const history = useNavigate();
  const initialStates = {
    username: "",
    password: "",
    showPassword: false,
    usernameError: "",
    passwordError: "",
  };

  const loginButtonStyle = {
    marginTop: "30px",
    color: '#ffffff',
    backgroundColor: '#25995c',
  };
  const textFieldsStyle = {
    width: "100%",
    marginTop: "20px",
    marginLeft: "auto"
  };
  const errorTextsStyle = {
    color: "#f00",
    fontSize: 12,
  };
  const rootStyle = {
    minHeight: 400,
    width: "100%",
    height: "100%"
  };
  const paperStyle = {
    marginTop: "100px",
    width: "70%",
    height: "500px"
  };
  const nameStyle = {
    height: "200px"
  }

  const classes = useStyle();
  const [values, setValues] = useState(initialStates);
  const [alertMessage, setAlertMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleValidation = () => {
    let usernameError = "";
    let passwordError = "";

    if (
      !values.password ||
      values.password.length < 6 ||
      values.password.length > 40
    ) {
      passwordError = "Password must be at least 6 characters.";
    }
    setValues({
      ...values,
      usernameError: usernameError,
      passwordError: passwordError,
    });
    if (usernameError || passwordError) {
      return false;
    }
    return true;
  };

  async function handleLogin(event) {
    event.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      const data = { username: values.username, password: values.password };
      const formData = Const.toFormData(data);
      axios.post(`${Const.baseUrl}/account/login`, formData).then((res) => {

        if (res.status === 200) {
          if (res.data.status === "success") {
            localStorage.setItem("token", res.data.token);
            // history.push(`/home/${values.username}`);
            //history('./home');
          } else {
            setAlertMessage("Username or password wrong.");
            setOpen(true);
          }
        }
      });
    }
  }

  return (
    <form onSubmit={handleLogin}>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={rootStyle}
      >
        <Portal>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            className={classes.alertMessage}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            <Alert onClose={handleClose} variant="filled" severity="error">
              {alertMessage}
            </Alert>
          </Snackbar>
        </Portal>
        <Paper style={paperStyle} elevation={5}>
          <Grid item container xl={12} lg={12} xs={12} alignItems="center"
            justifyContent="center">
            <img src={name} style={nameStyle} />
          </Grid>
          <Grid
            item
            container
            xl={12}
            lg={12}
            xs={12}
            alignItems="center"
            justifyContent="center"
          >
            {[values.usernameError, values.passwordError].map((value) => {
              return (
                <Grid item lg={7} sm={8} xs={10} style={errorTextsStyle}>
                  {value}
                </Grid>
              );
            })}
            <Grid item lg={7} sm={8} xs={10}>
              <FormControl style={textFieldsStyle}>
                <InputLabel htmlFor="standard-adornment-password">
                  Username
                </InputLabel>
                <Input
                  id="standard-number"
                  value={values.username}
                  onChange={handleChange("username")}
                  error={
                    values.requiredError || values.usernameError ? true : false
                  }
                />
              </FormControl>
            </Grid>
            <Grid item lg={7} sm={8} xs={10}>
              <FormControl style={textFieldsStyle}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  error={values.passwordError ? true : false}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item lg={7} sm={8} xs={10}></Grid>
            <Grid
              item
              container
              lg={7}
              sm={8}
              xs={10}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item lg={6} sm={6} xs={7}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={loginButtonStyle}
                  fullWidth="true"

                >
                  Login
                </Button>
              </Grid>

            </Grid>

          </Grid>
        </Paper>
      </Grid>

    </form >
  );
}
