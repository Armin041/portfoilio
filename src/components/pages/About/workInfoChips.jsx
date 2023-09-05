import { CoffeeRounded, Group, GroupWorkRounded, LibraryAddCheckRounded } from "@mui/icons-material";
import { Box, Chip, Tooltip, Typography } from "@mui/material";


const WorkInfoChips = () => {
    return (

        <>
            <Box component="div" sx={{ width: 1, mb: 1 }}>
                <Tooltip title={"تعداد قهوه خورده شده"} placement="right" arrow >

                    <Chip icon={<CoffeeRounded />} label={
                        <Typography variant="body1" color="black">
                            2185
                        </Typography>
                    } sx={{ p: 2, width: 1 }} color="primary" />
                </Tooltip>

            </Box>
            <Box component="div" sx={{ width: 1, mb: 1 }}>
                <Tooltip title={"تعداد پروژه انجام شده"} placement="right" arrow >

                    <Chip icon={<LibraryAddCheckRounded />} label={
                        <Typography variant="body1" color="black">
                            5
                        </Typography>
                    } sx={{ p: 2, width: 1 }} color="success" />
                </Tooltip>

            </Box><Box component="div" sx={{ width: 1, mb: 1 }}>
                <Tooltip title={" تعداد همکاری در پروژه تیمی "} placement="right" arrow >

                    <Chip icon={<Group />} label={
                        <Typography variant="body1" color="black">
                            4
                        </Typography>
                    } sx={{ p: 2, width: 1 }} color="warning" />
                </Tooltip>

            </Box>
        </>

    );
}

export default WorkInfoChips;