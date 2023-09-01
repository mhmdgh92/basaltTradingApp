import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from "./styles";
import { SymbolStatistics, ChartView, ChartType, ChartPricesType, ChartDateRange } from './components/';
import { ChartTypes, ChartPricesTypes } from '../common/utils/enums';
import { useSelector, useDispatch } from 'react-redux';
import { loadReportsData } from "../../redux/slices/reportsSlice";
import { AppLoader } from '../common';
import { getDateFormated, getPriorDate } from '../common/utils/date';

export function CompanyReports({ route: { params: { symbol, symbolImg } } }) {

  const [choosedChartType, setChoosedChartType] = useState(ChartTypes.Line);
  const [choosedChartPricesType, setChoosedChartPricesType] = useState(ChartPricesTypes.Open);

  // Dispatch
  const dispatch = useDispatch();

  // States
  const reportsSlice = useSelector(state => state.reports);

  // Reports Reducers
  const LoadReportsData = (data) => { dispatch(loadReportsData(data)); }

  const {
    reportsState,
    reportsIsLoading
  } = reportsSlice;

  useEffect(() => {
    // Load reports data
    LoadInitialData();
  }, []);

  LoadInitialData = () => {
    LoadReportsData({ symbols: symbol, date_from: getDateFormated(getPriorDate(10)), date_to: getDateFormated(new Date()) });
  }

  if (reportsIsLoading) {
    // Display loader while home data is loading
    return <AppLoader />;
  }


  const { data } = reportsState;

  const {
    container
  } = styles;

  onChangeDate = (startDate, endDate) => {
    LoadReportsData({ symbols: symbol, date_from: startDate, date_to: endDate });
  }

  return (
    <View style={container}>
      <SymbolStatistics data={data[0]} symbolImg={symbolImg} />
      <ChartView data={data} choosedChartType={choosedChartType} choosedChartPricesType={choosedChartPricesType} />
      <ChartType onChangeChartType={setChoosedChartType} choosedChartType={choosedChartType} />
      <ChartPricesType onChangeChartPricesType={setChoosedChartPricesType} choosedChartPricesType={choosedChartPricesType} />
      <ChartDateRange onChangeDate={onChangeDate} />
    </View >
  );
}
