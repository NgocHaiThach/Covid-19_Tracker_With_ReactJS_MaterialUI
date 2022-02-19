import { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('vn');
  const [report, setReport] = useState([]);

  useEffect(async () => {
    const data = await getCountries();
    setCountries(data);
  }, []);

  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value);
  }

  useEffect(async () => {

    if (selectedCountryId) {
      const item = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase())

      const rep = await getReportByCountry(item.Slug);
      rep.pop();
      setReport(rep)
    }

  }, [selectedCountryId, countries])



  return (
    <>
      <CountrySelector value={selectedCountryId} countries={countries} handleOnChange={handleOnChange} />
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </>
  );

}

export default App;
