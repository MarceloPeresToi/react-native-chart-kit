// Type definitions for ReactNativeChartKit 2.6
// Project: https://github.com/indiespirit/react-native-chart-kit
// TypeScript Version: 3.0

import * as React from 'react'

// LineChart
export interface LineChartProps {
  data: object
  width: number
  height: number
  withDots?: boolean
  withShadow?: boolean
  withInnerLines?: boolean
  withOuterLines?: boolean
  fromZero?: boolean
  yAxisLabel?: string
  chartConfig: object
  decorator?: Function
  onDataPointClick?: Function
  style?: object
  bezier?: boolean
}

export class LineChart extends React.Component<LineChartProps> {}

// AbstractChart
export class AbstractChart extends React.Component {}
