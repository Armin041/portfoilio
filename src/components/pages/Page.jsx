import { Box, Typography } from "@mui/material";

function Page(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ height: "100vh", overflow: "hidden" }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default Page;