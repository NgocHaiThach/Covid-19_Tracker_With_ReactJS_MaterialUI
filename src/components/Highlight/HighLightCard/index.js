import { Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') {
            return { borderLeft: '5px solid #c9302c' };
        }
        else if (props.type === 'recovered') {
            return { borderLeft: '5px solid #28a745' };
        }
        else {
            return { borderLeft: '5px solid gray' };
        }
    },
    title: {
        fontSize: 18, marginBottom: 5
    },
    count: {
        fontWeight: 'bold', fontSize: 18
    }
})

function HighLightCard({ title, count, type }) {
    const style = useStyles({ type })
    return (
        <Card className={style.wrapper}>
            <CardContent>
                <Typography
                    component="p"
                    variant="body2"
                    className={style.title}
                >
                    {title}
                </Typography>
                <Typography
                    component="span"
                    variant="body2"
                    className={style.count}
                >
                    {count}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HighLightCard;