import { Box, Typography } from "@mui/material";

const OrDivider = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: 300,
        mt: 3,
        mb: 2,
        marginInline: "auto",
      }}
    >
      <Box sx={{ flex: 1, height: "1px", backgroundColor: "#6B7280" }} />
      <Typography
        sx={{
          px: 2,
          color: "#6B7280",
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        Or
      </Typography>
      <Box sx={{ flex: 1, height: "1px", backgroundColor: "#6B7280" }} />
    </Box>
  );
};

export default OrDivider;
