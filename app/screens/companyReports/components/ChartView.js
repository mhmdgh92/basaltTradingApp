import React from 'react';
import { View } from 'react-native';
import { chartViewStyle } from './styles';
import { LineChart, AreaChart, BarChart, XAxis, YAxis, Grid } from 'react-native-svg-charts'
import Moment from 'moment';
import * as shape from 'd3-shape'
import { ChartTypes } from '../../common/utils/enums';

export const ChartView = ({ data, choosedChartType, choosedChartPricesType }) => {

    const {
        container, contentInset
    } = chartViewStyle;



    LineChartComp = () => {
        return (
            <LineChart
                style={{ flex: 1 }}
                data={data}
                svg={{ stroke: 'rgb(134, 65, 244)' }}
                contentInset={{ top: 20, bottom: 20 }}
                xAccessor={({ item }) => new Date(item.date)}
                yAccessor={({ item }) => item[choosedChartPricesType]}
            >
                <XAxis
                    data={data}
                    xAccessor={({ item }) => new Date(item.date)}
                    numberOfTicks={5}
                    formatLabel={(value) => Moment(value).format('DD MM')}
                />
                <Grid />
            </LineChart>
        );
    }

    AreaChartComp = () => {
        return (
            <AreaChart
                style={{ flex: 1 }}
                data={data}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={contentInset}
                xAccessor={({ item }) => new Date(item.date)}
                yAccessor={({ item }) => item[choosedChartPricesType]}
            >
                <XAxis
                    data={data}
                    xAccessor={({ item }) => new Date(item.date)}
                    numberOfTicks={5}
                    formatLabel={(value) => Moment(value).format('DD MM')}
                />
                <Grid />
            </AreaChart>
        );
    }

    BarChartComp = () => {
        return (
            <BarChart
                style={{ flex: 1 }}
                data={data}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                contentInset={contentInset}
                xAccessor={({ item }) => new Date(item.date)}
                yAccessor={({ item }) => item[choosedChartPricesType]}
            >
                <XAxis
                    data={data}
                    xAccessor={({ item }) => new Date(item.date)}
                    numberOfTicks={5}
                    formatLabel={(value, index) => Moment(value).format('DD MM')}
                />
                <Grid />
            </BarChart>
        );
    }

    return (
        <View style={container} >
            <YAxis
                contentInset={contentInset}
                data={[
                    Math.min.apply(null, data.map((v) => v[choosedChartPricesType]))
                    , Math.max.apply(null, data.map((v) => v[choosedChartPricesType]))]}
                numberOfTicks={5}
            />
            {choosedChartType == ChartTypes.Line ? LineChartComp() :
                choosedChartType == ChartTypes.Area ? AreaChartComp() : BarChartComp()}
        </View>
    );
}