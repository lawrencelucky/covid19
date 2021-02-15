import React, { useState, useEffect } from 'react';
import numeral from 'numeral';

import { WorldwideStatisticsContainer } from './WorldwideStatistics.styles';

import Statistics from './../StatisticsComponent/Statistics.component';

const WorldwideStatistics = () => {
  const [lastUpdated, setLastUpdated] = useState<number>(0);
  const [totalCases, setTotalCases] = useState<number>(0);
  const [totalDeathCase, setTotalDeathCase] = useState<number>(0);
  const [totalRecoveredCases, setTotalRecoveredCases] = useState<number>(0);
  const [todayCase, setTodayCase] = useState<number>(0);
  const [todayRecoveredCases, setTodayRecoveredCases] = useState<number>(0);
  const [todayDeathCase, setTodayDeathCase] = useState<number>(0);
  const [activeCase, setActiveCase] = useState<number>(0);
  const [criticalCase, setCriticalCase] = useState<number>(0);
  const [month, setMonth] = useState<string>('');
  const [date, setDate] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
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
        return setMonth('Jan');
      case 1:
        return setMonth('Feb');
      case 2:
        return setMonth('Mar');
      case 3:
        return setMonth('Apr');
      case 4:
        return setMonth('May');
      case 5:
        return setMonth('June');
      case 6:
        return setMonth('July');
      case 7:
        return setMonth('Aug');
      case 8:
        return setMonth('Sept');
      case 9:
        return setMonth('Oct');
      case 10:
        return setMonth('Nov');
      case 11:
        return setMonth('Dec');
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
    setTotalCases(data?.cases);
    setTotalDeathCase(data?.deaths);
    setTotalRecoveredCases(data?.recovered);
    setTodayCase(data?.todayCases);
    setTodayRecoveredCases(data?.todayRecovered);
    setTodayDeathCase(data?.todayDeaths);
    setActiveCase(data?.active);
    setCriticalCase(data?.critical);
  };

  return (
    <WorldwideStatisticsContainer>
      <Statistics
        flag=''
        location='Worldwide'
        totalCases={numeral(totalCases).format()}
        todayCase={numeral(todayCase).format()}
        totalRecoveredCase={numeral(totalRecoveredCases).format()}
        todayRecoveredCase={numeral(todayRecoveredCases).format()}
        totalDeathCase={numeral(totalDeathCase).format()}
        todayDeathCase={numeral(todayDeathCase).format()}
        activeCase={numeral(activeCase).format()}
        criticalCase={numeral(criticalCase).format()}
        lastUpdated={`${month}, ${date} ${year}. ${hour}:${minute} ${timeOfDay}`}
      />
    </WorldwideStatisticsContainer>
  );
};

export default WorldwideStatistics;
