import { Box, Chip, Divider, LinearProgress } from "@mui/material";


const Skills = ({ name, icon, color, value }) => {
    return (

        <>
            <Box sx={{ mt: 2 }}>

                <Divider textAlign="left" sx={{
                    "&::before, &::after": {
                        borderColor: `${color}.main`,
                    },
                }}>
                    <Chip label={name} color={color} icon={
                        <Box
                            component="img"
                            src={icon}
                        />
                    } />

                </Divider>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1, mt: 4 }}>
                        <LinearProgress variant="buffer" valueBuffer={100} value={value} color={color}
                            sx={{
                                height: 10,
                                borderRadius: 2
                            }}
                        />
                    </Box>
                    <Box sx={{ minWidth: 55, mt: 4 }}>
                        <Chip
                            label={`${Math.round(value)}%`}
                            color="primary"
                        />
                    </Box>
                </Box>

            </Box>
        </>

    );
}

export default Skills;