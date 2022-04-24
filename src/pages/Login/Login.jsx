import { useFormik } from "formik";
import { initialValues, validationSchema } from "./schemas";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as Yup from "yup";

const Login = () => {
  // petición al backend
  const handleLogin = ({ username, password }) => {
    console.log(username, password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: ({ username, password }) => {
      handleLogin({ username, password });
    },
  });

  console.log(formik?.errors);

  return (
    <Container>
      <Grid container direction="row" justifyContent="center">
        <Grid item lg={4}>
          <Typography variant="h4" mb={3}>
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={1}>
              <TextField
                label="Nombre de usuario"
                type="text"
                name="username"
                onChange={formik.handleChange}
                errors={formik.errors.username}
                fullWidth
              />
              {formik?.errors?.username && (
                <span>{formik.errors.username}</span>
              )}
            </Box>
            <Box>
              <TextField
                label="Password"
                type="text"
                name="password"
                onChange={formik.handleChange}
                errors={formik.errors.password}
                fullWidth
              />
              {formik?.errors?.password && (
                <span>{formik.errors.password}</span>
              )}
            </Box>
            <Box mt="1rem">
              <Button type="submit" variant="contained" fullWidth>
                Acceder
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
