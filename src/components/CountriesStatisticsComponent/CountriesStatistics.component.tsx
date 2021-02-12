import React, { useState, useEffect } from 'react';
import numeral from 'numeral';

import { CountriesStatisticsContainer } from './CountriesStatistics.styles';

import Statistics from './../StatisticsComponent/Statistics.component';

interface ICountryData {
  countryInfo: { flag: string };
  country: string;
  cases: number;
  todayCases: number;
  recovered: number;
  todayRecovered: number;
  deaths: number;
  todayDeaths: number;
  active: number;
  critical: number;
}

const CountriesStatistics = () => {
  const [countryData, setCountryData] = useState<[]>([]);

  useEffect(() => {
    fetchCovidStatistics();
  });

  const fetchCovidStatistics = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/countries');
    const data = await response.json();
    const sortedData = data.sort(
      (a: { cases: number }, b: { cases: number }) => {
        return b.cases - a.cases;
      }
    );

    setCountryData(sortedData);
  };

  return (
    <CountriesStatisticsContainer>
      {countryData.map((country: ICountryData, index) => (
        <Statistics
          key={index}
          flag={country.countryInfo.flag}
          location={country.country}
          totalCases={numeral(country.cases).format()}
          todayCase={numeral(country.todayCases).format()}
          totalRecoveredCase={numeral(country.recovered).format()}
          todayRecoveredCase={numeral(country.todayRecovered).format()}
          totalDeathCase={numeral(country.deaths).format()}
          todayDeathCase={numeral(country.todayDeaths).format()}
          activeCase={numeral(country.active).format()}
          criticalCase={numeral(country.critical).format()}
          lastUpdated=''
        />
      ))}
    </CountriesStatisticsContainer>
  );
};

export default CountriesStatistics;
