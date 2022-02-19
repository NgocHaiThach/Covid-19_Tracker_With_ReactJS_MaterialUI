import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core';
import React from 'react';

function CountrySelector({ value, handleOnChange, countries }) {
    return (
        <>
            <FormControl>
                <InputLabel
                    htmlFor="country-selector"
                    shrink
                >
                    Quốc Gia
                </InputLabel>
                <NativeSelect
                    value={value}
                    onChange={handleOnChange}
                    inputProps={{
                        name: 'country',
                        id: 'country-selector'
                    }}
                >
                    {countries.map((item, index) => {
                        return <option value={item.ISO2.toLowerCase()} key={index}>
                            {item.Country}
                        </option>
                    })}
                </NativeSelect>
                <FormHelperText>Lựa chọn quốc gia</FormHelperText>
            </FormControl>
        </>
    );
}

export default CountrySelector;