import { AccountCircle, AccountCircleOutlined, AccountCircleRounded, EmailRounded, SolarPower, SubjectRounded, Terminal } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardContent, Chip, Divider, InputAdornment, InputLabel, TextField, Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { grey } from "@mui/material/colors";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactJson from "react-json-view";
import { contactUsSchema } from "../../../validation/contactus";
// import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {

    const theme = useTheme()
    const [showJson, setShowJson] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        // recaptcha: ""
    });

    const formik = useFormik({
        initialValues: showJson,
        onSubmit: (values) => {
            console.log(values)

        },
        validationSchema: contactUsSchema,
    })

    useEffect(() => {
        setShowJson({
            fullname: formik.values.fullname,
            email: formik.values.email,
            subject: formik.values.subject,
            message: formik.values.message
        });
    }, [formik.values]);

    return (

        <>

            <Helmet>
                <title> پورتفولیو |  رزومه</title>
            </Helmet>

            <Card
                sx={{
                    height: "100%",
                    backgroundColor: "primary",
                    overflowY: "scroll",
                    display: "flex",
                    flexDirection: "column",
                    "&.MuiCard-root::-webkit-scrollbar": {
                        display: "none"
                    }
                }}
            >
                <CardContent>
                    <Divider
                        textAlign="center"
                        sx={{
                            m: 2,
                            "&::before, &::after": {
                                borderColor: "warning.main",
                            },
                        }}
                    >
                        <Chip
                            icon={<AccountCircle />}
                            color="warning"
                            label={
                                <Typography
                                    variant="body1"
                                    color="black"
                                    sx={{ textAlign: "center" }}
                                >
                                    ارتباط با من
                                </Typography>
                            }
                            sx={{ p: 3 }}
                        />
                    </Divider >

                    <Grid2 container>





                        <Grid2
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                            sx={{
                                height: "31em", borderRadius: "1%",
                                border: "solid 1px", borderColor: grey[400],
                                fontSize: "1.25em"
                            }}

                        >
                            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                <Grid2 spacing={5} >
                                    <CardContent >
                                        <InputLabel >
                                            نام و نام خانوادگی
                                        </InputLabel>
                                        <TextField
                                            fullWidth
                                            label="نام"
                                            name="fullname"
                                            variant="outlined"
                                            size="small"
                                            color="warning"
                                            helperText={formik.touched.fullname ? formik.errors.fullname : null}
                                            error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                            value={formik.values?.fullname}
                                            onChange={formik.handleChange}
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <AccountCircleRounded />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <InputLabel >
                                            ایمیل
                                        </InputLabel>
                                        <TextField
                                            fullWidth
                                            label="ایمیل"
                                            name="email"
                                            variant="outlined"
                                            size="small"
                                            color="warning"
                                            helperText={formik.touched.email ? formik.errors.email : null}
                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                            value={formik.values?.email}
                                            onChange={formik.handleChange}
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <EmailRounded />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <InputLabel >
                                            موضوع
                                        </InputLabel>
                                        <TextField
                                            fullWidth
                                            label="موضوع"
                                            name="subject"
                                            variant="outlined"
                                            size="small"
                                            color="warning"
                                            helperText={formik.touched.subject ? formik.errors.subject : null}
                                            error={Boolean(formik.touched.subject && formik.errors.subject)}
                                            value={formik.values?.subject}
                                            onChange={formik.handleChange}
                                            sx={{ mb: 2 }}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="start">
                                                        <SubjectRounded />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                        <InputLabel >
                                            متن پیام
                                        </InputLabel>
                                        <TextField
                                            fullWidth
                                            label="متن پیام..."
                                            name="message"
                                            variant="outlined"
                                            size="small"
                                            color="warning"
                                            helperText={formik.touched.message ? formik.errors.message : null}
                                            error={Boolean(formik.touched.message && formik.errors.message)}
                                            value={formik.values?.message}
                                            onChange={formik.handleChange}
                                            multiline
                                            minRows={10}

                                        />
                                        {/* <ReCAPTCHA
                                            sitekey="6Lfx_usnAAAAAOuFJa8B3xjpV-AxnSxc5pF6Y1RL"
                                            theme={theme.palette.mode}
                                            onChange={value => {
                                                formik.setFieldValue("recaptcha", value)
                                            }}

                                        />
                                        {formik.errors.recaptcha &&
                                            formik.touched.recaptcha(
                                                <Typography variant="caption" color="error">
                                                    {formik.errors.recaptcha}
                                                </Typography>
                                            )} */}

                                    </CardContent>

                                </Grid2>
                                <CardActions >
                                    <Button type="submit" fullWidth variant="contained" color="warning">
                                        ارسال کن
                                    </Button>
                                </CardActions>

                            </form>

                        </Grid2>

                        <Grid2
                            xs={12}
                            sm={12}
                            md={12}
                            lg={6}
                            xl={6}
                            sx={{
                                height: "29em", borderRadius: "1%",
                                border: "solid 1px", borderColor: grey[400],
                                fontSize: "1.35em", backgroundColor: "#1E1E1E"
                            }}
                        >

                            <Box sx={{ mt: 2 }} dir="ltr">
                                <ReactJson
                                    displayDataTypes={false} theme={"twilight"}
                                    enableClipboard={false} indentWidth={10}
                                    src={showJson}
                                />
                            </Box>

                        </Grid2>




                    </Grid2>
                </CardContent>
            </Card >
        </>

    );
}

export default ContactForm;