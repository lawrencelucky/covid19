import React, { useState, useEffect } from 'react';
import numeral from 'numeral';

import {
  CovidStatisticsContainer,
  CovidStatisticsDescriptionContainer,
  CovidStatisticsHeader,
  CovidStatisticsDescription,
  CovidStatisticsUpdateContainer,
  ActiveCovidCasesContainer,
  TotalActiveCases,
  TotalActiveCaseDescription,
  DeadCovidCasesContainer,
  TotalDeathCases,
  TotalDeathCaseDescription,
  RecoveredCovidCasesContainer,
  TotalRecoveredCases,
  TotalRecoveryCaseDescription,
  CoronavirusIcon,
  CovidStatisticsFooter,
} from './CovidStatistics.styles';

const CovidStatistics = () => {
  const [lastUpdated, setLastUpdated] = useState<number>(0);
  const [activeCases, setActiveCases] = useState<number>(0);
  const [deathCases, setDeathCases] = useState<number>(0);
  const [recoveredCases, setRecoveredCases] = useState<number>(0);
  const [month, setMonth] = useState<string>();
  const [date, setDate] = useState<number>();
  const [year, setYear] = useState<number>();
  const [hour, setHour] = useState<string>('');
  const [minute, setMinute] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<string>();

  useEffect(() => {
    fetchCovidStatistics();
  });

  useEffect(() => {
    const dateObject: Date = new Date(lastUpdated);

    switch (dateObject.getMonth()) {
      case 0:
        return setMonth('January');
      case 1:
        return setMonth('February');
      case 2:
        return setMonth('March');
      case 3:
        return setMonth('April');
      case 4:
        return setMonth('May');
      case 5:
        return setMonth('June');
      case 6:
        return setMonth('July');
      case 7:
        return setMonth('August');
      case 8:
        return setMonth('September');
      case 9:
        return setMonth('October');
      case 10:
        return setMonth('November');
      case 11:
        return setMonth('December');
    }
  }, [lastUpdated]);

  useEffect(() => {
    const dateObject: Date = new Date(lastUpdated);

    setDate(dateObject.getDate());
  }, [lastUpdated]);

  useEffect(() => {
    const dateObject: Date = new Date(lastUpdated);

    setYear(dateObject.getFullYear());
  }, [lastUpdated]);

  useEffect(() => {
    const dateObject: Date = new Date(lastUpdated);
    let hr = dateObject.getHours().toString();

    if (parseInt(hr) >= 12) {
      setTimeOfDay('pm');
    } else {
      setTimeOfDay('am');
    }

    if (parseInt(hr) >= 13) {
      hr = `${+hr - 12}`;
    }

    if (parseInt(hr) < 10) {
      hr = `0${hr}`;
    }

    setHour(hr);
  }, [lastUpdated]);

  useEffect(() => {
    const dateObject: Date = new Date(lastUpdated);
    let min = dateObject.getMinutes().toString();

    if (parseInt(min) < 10) {
      min = `0${min}`;
    }

    setMinute(min);
  }, [lastUpdated]);

  const fetchCovidStatistics = async () => {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();

    setLastUpdated(data?.updated);
    setActiveCases(data?.cases);
    setDeathCases(data?.deaths);
    setRecoveredCases(data?.recovered);
  };

  return (
    <CovidStatisticsContainer>
      <CovidStatisticsDescriptionContainer>
        <CovidStatisticsHeader>Coronavirus Statistics</CovidStatisticsHeader>
        <CovidStatisticsDescription>
          Live statistics of the coronavirus, tracking the number of total
          confirmed cases, total recovered patients and the total death toll.
        </CovidStatisticsDescription>
      </CovidStatisticsDescriptionContainer>

      <CovidStatisticsUpdateContainer>
        <ActiveCovidCasesContainer>
          <CoronavirusIcon />
          <TotalActiveCases>{numeral(activeCases).format()}</TotalActiveCases>
          <TotalActiveCaseDescription>TOTAL CASES</TotalActiveCaseDescription>
        </ActiveCovidCasesContainer>
        <RecoveredCovidCasesContainer>
          <CoronavirusIcon />
          <TotalRecoveredCases>
            {numeral(recoveredCases).format()}
          </TotalRecoveredCases>
          <TotalRecoveryCaseDescription>
            TOTAL RECOVERED PATIENT
          </TotalRecoveryCaseDescription>
        </RecoveredCovidCasesContainer>
        <DeadCovidCasesContainer>
          <CoronavirusIcon />
          <TotalDeathCases>{numeral(deathCases).format()}</TotalDeathCases>
          <TotalDeathCaseDescription>TOTAL DEATHS</TotalDeathCaseDescription>
        </DeadCovidCasesContainer>
      </CovidStatisticsUpdateContainer>

      <CovidStatisticsFooter>
        Last updated: {month}, {date} {year}. {hour}:{minute} {timeOfDay}.
      </CovidStatisticsFooter>
    </CovidStatisticsContainer>
  );
};

export default CovidStatistics;
