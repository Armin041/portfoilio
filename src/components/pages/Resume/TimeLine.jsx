import { ScheduleRounded, School, SchoolRounded } from '@mui/icons-material';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Typography } from '@mui/material';
import { educationInfo } from '../../../constantse/resumeInfo';
import { useTheme } from '@emotion/react';

const TimeLineEducation = () => {

    const theme = useTheme()
    return (

        <>

            {
                educationInfo.map((item, index) => (
                    <Timeline key={index} position="right" color='black'>

                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='primary'>
                                    <SchoolRounded />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }} >
                                <Typography

                                    variant="body2"
                                    color="gray">{item.year}</Typography>
                                <Typography color={theme.palette.mode === "dark" ? "text.secondary" : "text.primary"} variant="h6" component="span">
                                    {item.liecens}
                                </Typography>
                                <Typography variant='body1' color={theme.palette.mode === "dark" ? "text.secondary" : "text.primary"}>{item.schoolMajor} </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>

                ))
            }




        </>


    );
}

export default TimeLineEducation;