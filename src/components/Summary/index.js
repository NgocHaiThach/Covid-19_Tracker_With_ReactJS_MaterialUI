import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMapDataByCountryId } from '../../apis';
import HighMap from '../Charts/HighMap';
import LineChart from '../Charts/LineCharts';

function Summary({ report, selectedCountryId }) {

    const [mapData, setMapData] = useState({});

    useEffect(() => {
        if (selectedCountryId) {
            // import(
            //     `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
            // )
            //     .then((res) => {
            //         setMapData(res);
            //     })
            //     .catch((err) => console.log({ err }));
            getMapDataByCountryId();
        }
    }, [selectedCountryId])

    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HighMap mapData={mapData} />
            </Grid>
        </Grid>
    );
}

export default Summary;