import React, { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { EMAIL_PATTERN, PASSWORD_PATTERN } from "../utils/constants/constants";

const emailRegex = new RegExp(EMAIL_PATTERN);
const passwordRegex = new RegExp(PASSWORD_PATTERN);

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const { login, loading } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    // console.log("Form Submitted:", data);
    await login(data);
  };

  const commonSlotProps = {
    input: {
      style: {
        fontSize: "1.6rem",
        fontFamily: "var(--jakarta)",
        color: "#667085",
      },
    },
  };

  const labelStyle = {
    fontSize: "1.6rem",
    fontWeight: 600,
    marginBottom: "12px",
    fontFamily: "var(--poppins)",
    color: "#1f1f1f",
  };

  const helperTextStyle = { style: { fontSize: "1.6rem" } };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        mx: "auto",
        mt: "33px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <div>
        <Typography sx={labelStyle}>Email Address</Typography>
        <TextField
          placeholder="Enter your email address"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Invalid email format",
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          slotProps={commonSlotProps}
          FormHelperTextProps={helperTextStyle}
        />
      </div>

      <div>
        <Typography sx={labelStyle}>Password</Typography>
        <TextField
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: passwordRegex,
              message:
                "Password length must be 8 or more, include uppercase letter, lowercase letter and number",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          FormHelperTextProps={helperTextStyle}
          fullWidth
          slotProps={{
            ...commonSlotProps,
            input: {
              ...commonSlotProps.input,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>

      <Button
        variant="contained"
        type="submit"
        fullWidth
        disabled={loading}
        sx={{
          background: "#60E5AE",
          mt: 2,
          fontWeight: "bold",
          fontSize: "16px",
          paddingY: "10px",
          color: "#1f1f1f",
          fontFamily: "var(--jakarta)",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
