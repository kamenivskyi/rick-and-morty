import { Box, Button, Typography } from "@mui/material";

interface IErrorFallback {
  error: any;
  resetErrorBoundary: Function;
}
export function ErrorFallback({ error, resetErrorBoundary }: IErrorFallback) {
  console.log("Errr: ", error);
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div role="alert">
      <Box
        justifyContent={"center"}
        display="flex"
        alignItems="center"
        flexDirection="column"
        margin={"30px auto"}
      >
        <Typography variant="h4" color="warning" marginBottom={"20px"}>
          💥 Something went wrong:
        </Typography>
        <pre>{error?.message}</pre>
        <Button
          variant="contained"
          onClick={refreshPage}
          sx={{ marginTop: "20px" }}
        >
          Refresh page
        </Button>
      </Box>
    </div>
  );
}
