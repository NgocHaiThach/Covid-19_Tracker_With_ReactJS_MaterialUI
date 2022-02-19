import requestApi from "../utils/requestApi";

export const getCountries = async () => {
    const res = await requestApi('https://api.covid19api.com/countries', 'GET');
    return res.data
}

export const getReportByCountry = async (country) => {
    const res = await requestApi(`https://api.covid19api.com/dayone/country/${country}`, 'GET');
    return res.data
}

export const getMapDataByCountryId = (countryId) => {

    console.log('select', typeof import(
        `@highcharts/map-collection/countries/${countryId}/${countryId}-all.geo.js`
    ))
}

