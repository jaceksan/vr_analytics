/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2022-11-01T15:21:00.946Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Tail num
 * Attribute ID: tail_num
 */
export const TailNum: IAttribute = newAttribute("tail_num");
/**
 * Attribute Title: Aircraft model code
 * Attribute ID: aircraft_model_code
 */
export const AircraftModelCode: IAttribute = newAttribute("aircraft_model_code");
/**
 * Attribute Title: Manufacturer
 * Attribute ID: manufacturer
 */
export const Manufacturer: IAttribute = newAttribute("manufacturer");
/**
 * Attribute Title: Code
 * Attribute ID: dest.airports.code
 */
export const Code: IAttribute = newAttribute("dest.airports.code");
/**
 * Attribute Title: State
 * Attribute ID: dest.airports.state
 */
export const State: IAttribute = newAttribute("dest.airports.state");
/**
 * Attribute Title: Fac type
 * Attribute ID: dest.fac_type
 */
export const FacType: IAttribute = newAttribute("dest.fac_type");
/**
 * Attribute Title: Faa region
 * Attribute ID: dest.faa_region
 */
export const FaaRegion: IAttribute = newAttribute("dest.faa_region");
/**
 * Attribute Title: Name
 * Attribute ID: dest.airports.name
 */
export const Name: IAttribute = newAttribute("dest.airports.name");
/**
 * Attribute Title: Code
 * Attribute ID: origin.airports.code
 */
export const Code_1: IAttribute = newAttribute("origin.airports.code");
/**
 * Attribute Title: State
 * Attribute ID: origin.airports.state
 */
export const State_1: IAttribute = newAttribute("origin.airports.state");
/**
 * Attribute Title: Fac type
 * Attribute ID: origin.fac_type
 */
export const FacType_1: IAttribute = newAttribute("origin.fac_type");
/**
 * Attribute Title: Faa region
 * Attribute ID: origin.faa_region
 */
export const FaaRegion_1: IAttribute = newAttribute("origin.faa_region");
/**
 * Attribute Title: Name
 * Attribute ID: origin.airports.name
 */
export const Name_1: IAttribute = newAttribute("origin.airports.name");
/**
 * Attribute Title: Code
 * Attribute ID: carriers.code
 */
export const Code_2: IAttribute = newAttribute("carriers.code");
/**
 * Attribute Title: Name
 * Attribute ID: carriers.name
 */
export const Name_2: IAttribute = newAttribute("carriers.name");
/**
 * Attribute Title: Nickname
 * Attribute ID: nickname
 */
export const Nickname: IAttribute = newAttribute("nickname");
/**
 * Attribute Title: Cancelled
 * Attribute ID: cancelled
 */
export const Cancelled: IAttribute = newAttribute("cancelled");
/**
 * Attribute Title: Diverted
 * Attribute ID: diverted
 */
export const Diverted: IAttribute = newAttribute("diverted");
/**
 * Attribute Title: Flight num
 * Attribute ID: flight_num
 */
export const FlightNum: IAttribute = newAttribute("flight_num");
/**
 * Attribute Title: Id2
 * Attribute ID: id2
 */
export const Id2: IAttribute = newAttribute("id2");
/**
 * Metric Title: Aircraft count
 * Metric ID: aircraft_count
 * Metric Type: MAQL Metric
 */
export const AircraftCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("aircraft_count", "measure"));
/**
 * Metric Title: Airport count
 * Metric ID: airport_count
 * Metric Type: MAQL Metric
 */
export const AirportCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("airport_count", "measure"));
/**
 * Metric Title: Avg elevation
 * Metric ID: avg_elevation
 * Metric Type: MAQL Metric
 */
export const AvgElevation: IMeasure<IMeasureDefinition> = newMeasure(idRef("avg_elevation", "measure"));
/**
 * Metric Title: Carrier count
 * Metric ID: carrier_count
 * Metric Type: MAQL Metric
 */
export const CarrierCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("carrier_count", "measure"));
/**
 * Metric Title: Complex metric example
 * Metric ID: complex_metric_example
 * Metric Type: MAQL Metric
 */
export const ComplexMetricExample: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("complex_metric_example", "measure")
);
/**
 * Metric Title: Destination count
 * Metric ID: destination_count
 * Metric Type: MAQL Metric
 */
export const DestinationCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("destination_count", "measure"));
/**
 * Metric Title: Flight count
 * Metric ID: flight_count
 * Metric Type: MAQL Metric
 */
export const FlightCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("flight_count", "measure"));
/**
 * Metric Title: Flight count - carriers
 * Metric ID: flight_count_-_carriers
 * Metric Type: MAQL Metric
 */
export const FlightCountCarriers: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("flight_count_-_carriers", "measure")
);
/**
 * Metric Title: Flight count - destination
 * Metric ID: flight_count_-_destination
 * Metric Type: MAQL Metric
 */
export const FlightCountDestination: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("flight_count_-_destination", "measure")
);
/**
 * Metric Title: Flight count - overall
 * Metric ID: flight_count_-_overall
 * Metric Type: MAQL Metric
 */
export const FlightCountOverall: IMeasure<IMeasureDefinition> = newMeasure(idRef("flight_count_-_overall", "measure"));
/**
 * Metric Title: Flight count - TOP(X)
 * Metric ID: flight_count_-_top_x
 * Metric Type: MAQL Metric
 */
export const FlightCountTOPX: IMeasure<IMeasureDefinition> = newMeasure(idRef("flight_count_-_top_x", "measure"));
/**
 * Metric Title: Origin count
 * Metric ID: origin_count
 * Metric Type: MAQL Metric
 */
export const OriginCount: IMeasure<IMeasureDefinition> = newMeasure(idRef("origin_count", "measure"));
/**
 * Metric Title: Percentage of carrier flights
 * Metric ID: percentage_of_carrier_flights
 * Metric Type: MAQL Metric
 */
export const PercentageOfCarrierFlights: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percentage_of_carrier_flights", "measure")
);
/**
 * Metric Title: Percentage of carrier to destination flights
 * Metric ID: percentage_of_carrier_to_destination_flights
 * Metric Type: MAQL Metric
 */
export const PercentageOfCarrierToDestinationFlights: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percentage_of_carrier_to_destination_flights", "measure")
);
/**
 * Metric Title: Percentage of current to carrier
 * Metric ID: percentage_of_current_to_carrier
 * Metric Type: MAQL Metric
 */
export const PercentageOfCurrentToCarrier: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percentage_of_current_to_carrier", "measure")
);
/**
 * Metric Title: Percentage of flights
 * Metric ID: percentage_of_flights
 * Metric Type: MAQL Metric
 */
export const PercentageOfFlights: IMeasure<IMeasureDefinition> = newMeasure(idRef("percentage_of_flights", "measure"));
/**
 * Metric Title: Percentage of flights - expanded
 * Metric ID: percentage_of_flights_-_expanded
 * Metric Type: MAQL Metric
 */
export const PercentageOfFlightsExpanded: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("percentage_of_flights_-_expanded", "measure")
);
/**
 * Metric Title: Total distance
 * Metric ID: total_distance
 * Metric Type: MAQL Metric
 */
export const TotalDistance: IMeasure<IMeasureDefinition> = newMeasure(idRef("total_distance", "measure"));
/**
 * Fact Title: Seats
 * Fact ID: seats
 */
export const Seats = {
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Seats
   * Fact ID: seats
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("seats", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Elevation
 * Fact ID: dest.elevation
 */
export const Elevation = {
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Elevation
   * Fact ID: dest.elevation
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("dest.elevation", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Elevation
 * Fact ID: origin.elevation
 */
export const Elevation_1 = {
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Elevation
   * Fact ID: origin.elevation
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("origin.elevation", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Arr delay
 * Fact ID: arr_delay
 */
export const ArrDelay = {
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Arr delay
   * Fact ID: arr_delay
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("arr_delay", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Dep delay
 * Fact ID: dep_delay
 */
export const DepDelay = {
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Dep delay
   * Fact ID: dep_delay
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("dep_delay", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Distance
 * Fact ID: distance
 */
export const Distance = {
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Distance
   * Fact ID: distance
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("distance", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Taxi in
 * Fact ID: taxi_in
 */
export const TaxiIn = {
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Taxi in
   * Fact ID: taxi_in
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("taxi_in", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Taxi out
 * Fact ID: taxi_out
 */
export const TaxiOut = {
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Taxi out
   * Fact ID: taxi_out
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("taxi_out", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Flight time
 * Fact ID: flight_time
 */
export const FlightTime = {
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Flight time
   * Fact ID: flight_time
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("flight_time", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Attribute Title: Dep time - Minute
 * Attribute ID: dep_time.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeMinute: IAttribute = newAttribute("dep_time.minute");
/**
 * Attribute Title: Dep time - Hour
 * Attribute ID: dep_time.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeHour: IAttribute = newAttribute("dep_time.hour");
/**
 * Attribute Title: Dep time - Date
 * Attribute ID: dep_time.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeDate: IAttribute = newAttribute("dep_time.day");
/**
 * Attribute Title: Dep time - Week/Year
 * Attribute ID: dep_time.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeWeekYear: IAttribute = newAttribute("dep_time.week");
/**
 * Attribute Title: Dep time - Month/Year
 * Attribute ID: dep_time.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeMonthYear: IAttribute = newAttribute("dep_time.month");
/**
 * Attribute Title: Dep time - Quarter/Year
 * Attribute ID: dep_time.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeQuarterYear: IAttribute = newAttribute("dep_time.quarter");
/**
 * Attribute Title: Dep time - Year
 * Attribute ID: dep_time.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeYear: IAttribute = newAttribute("dep_time.year");
/**
 * Attribute Title: Dep time - Minute of Hour
 * Attribute ID: dep_time.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeMinuteOfHour: IAttribute = newAttribute("dep_time.minuteOfHour");
/**
 * Attribute Title: Dep time - Hour of Day
 * Attribute ID: dep_time.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeHourOfDay: IAttribute = newAttribute("dep_time.hourOfDay");
/**
 * Attribute Title: Dep time - Day of Week
 * Attribute ID: dep_time.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeDayOfWeek: IAttribute = newAttribute("dep_time.dayOfWeek");
/**
 * Attribute Title: Dep time - Day of Month
 * Attribute ID: dep_time.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeDayOfMonth: IAttribute = newAttribute("dep_time.dayOfMonth");
/**
 * Attribute Title: Dep time - Day of Year
 * Attribute ID: dep_time.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeDayOfYear: IAttribute = newAttribute("dep_time.dayOfYear");
/**
 * Attribute Title: Dep time - Week of Year
 * Attribute ID: dep_time.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeWeekOfYear: IAttribute = newAttribute("dep_time.weekOfYear");
/**
 * Attribute Title: Dep time - Month of Year
 * Attribute ID: dep_time.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeMonthOfYear: IAttribute = newAttribute("dep_time.monthOfYear");
/**
 * Attribute Title: Dep time - Quarter of Year
 * Attribute ID: dep_time.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const DepTimeQuarterOfYear: IAttribute = newAttribute("dep_time.quarterOfYear");
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Dep time
   * Date Data Set ID: dep_time
   */
  DepTime: {
    ref: idRef("dep_time", "dataSet"),
    identifier: "dep_time"
    /**
     * Date Attribute: Dep time - Minute
     * Date Attribute ID: dep_time.minute
     */,
    DepTimeMinute: {
      ref: idRef("dep_time.minute", "attribute"),
      identifier: "dep_time.minute"
      /**
       * Display Form Title: Dep time - Minute
       * Display Form ID: dep_time.minute
       */,
      Default: newAttribute("dep_time.minute"),
    }
    /**
     * Date Attribute: Dep time - Hour
     * Date Attribute ID: dep_time.hour
     */,
    DepTimeHour: {
      ref: idRef("dep_time.hour", "attribute"),
      identifier: "dep_time.hour"
      /**
       * Display Form Title: Dep time - Hour
       * Display Form ID: dep_time.hour
       */,
      Default: newAttribute("dep_time.hour"),
    }
    /**
     * Date Attribute: Dep time - Date
     * Date Attribute ID: dep_time.day
     */,
    DepTimeDate: {
      ref: idRef("dep_time.day", "attribute"),
      identifier: "dep_time.day"
      /**
       * Display Form Title: Dep time - Date
       * Display Form ID: dep_time.day
       */,
      Default: newAttribute("dep_time.day"),
    }
    /**
     * Date Attribute: Dep time - Week/Year
     * Date Attribute ID: dep_time.week
     */,
    DepTimeWeekYear: {
      ref: idRef("dep_time.week", "attribute"),
      identifier: "dep_time.week"
      /**
       * Display Form Title: Dep time - Week/Year
       * Display Form ID: dep_time.week
       */,
      Default: newAttribute("dep_time.week"),
    }
    /**
     * Date Attribute: Dep time - Month/Year
     * Date Attribute ID: dep_time.month
     */,
    DepTimeMonthYear: {
      ref: idRef("dep_time.month", "attribute"),
      identifier: "dep_time.month"
      /**
       * Display Form Title: Dep time - Month/Year
       * Display Form ID: dep_time.month
       */,
      Default: newAttribute("dep_time.month"),
    }
    /**
     * Date Attribute: Dep time - Quarter/Year
     * Date Attribute ID: dep_time.quarter
     */,
    DepTimeQuarterYear: {
      ref: idRef("dep_time.quarter", "attribute"),
      identifier: "dep_time.quarter"
      /**
       * Display Form Title: Dep time - Quarter/Year
       * Display Form ID: dep_time.quarter
       */,
      Default: newAttribute("dep_time.quarter"),
    }
    /**
     * Date Attribute: Dep time - Year
     * Date Attribute ID: dep_time.year
     */,
    DepTimeYear: {
      ref: idRef("dep_time.year", "attribute"),
      identifier: "dep_time.year"
      /**
       * Display Form Title: Dep time - Year
       * Display Form ID: dep_time.year
       */,
      Default: newAttribute("dep_time.year"),
    }
    /**
     * Date Attribute: Dep time - Minute of Hour
     * Date Attribute ID: dep_time.minuteOfHour
     */,
    DepTimeMinuteOfHour: {
      ref: idRef("dep_time.minuteOfHour", "attribute"),
      identifier: "dep_time.minuteOfHour"
      /**
       * Display Form Title: Dep time - Minute of Hour
       * Display Form ID: dep_time.minuteOfHour
       */,
      Default: newAttribute("dep_time.minuteOfHour"),
    }
    /**
     * Date Attribute: Dep time - Hour of Day
     * Date Attribute ID: dep_time.hourOfDay
     */,
    DepTimeHourOfDay: {
      ref: idRef("dep_time.hourOfDay", "attribute"),
      identifier: "dep_time.hourOfDay"
      /**
       * Display Form Title: Dep time - Hour of Day
       * Display Form ID: dep_time.hourOfDay
       */,
      Default: newAttribute("dep_time.hourOfDay"),
    }
    /**
     * Date Attribute: Dep time - Day of Week
     * Date Attribute ID: dep_time.dayOfWeek
     */,
    DepTimeDayOfWeek: {
      ref: idRef("dep_time.dayOfWeek", "attribute"),
      identifier: "dep_time.dayOfWeek"
      /**
       * Display Form Title: Dep time - Day of Week
       * Display Form ID: dep_time.dayOfWeek
       */,
      Default: newAttribute("dep_time.dayOfWeek"),
    }
    /**
     * Date Attribute: Dep time - Day of Month
     * Date Attribute ID: dep_time.dayOfMonth
     */,
    DepTimeDayOfMonth: {
      ref: idRef("dep_time.dayOfMonth", "attribute"),
      identifier: "dep_time.dayOfMonth"
      /**
       * Display Form Title: Dep time - Day of Month
       * Display Form ID: dep_time.dayOfMonth
       */,
      Default: newAttribute("dep_time.dayOfMonth"),
    }
    /**
     * Date Attribute: Dep time - Day of Year
     * Date Attribute ID: dep_time.dayOfYear
     */,
    DepTimeDayOfYear: {
      ref: idRef("dep_time.dayOfYear", "attribute"),
      identifier: "dep_time.dayOfYear"
      /**
       * Display Form Title: Dep time - Day of Year
       * Display Form ID: dep_time.dayOfYear
       */,
      Default: newAttribute("dep_time.dayOfYear"),
    }
    /**
     * Date Attribute: Dep time - Week of Year
     * Date Attribute ID: dep_time.weekOfYear
     */,
    DepTimeWeekOfYear: {
      ref: idRef("dep_time.weekOfYear", "attribute"),
      identifier: "dep_time.weekOfYear"
      /**
       * Display Form Title: Dep time - Week of Year
       * Display Form ID: dep_time.weekOfYear
       */,
      Default: newAttribute("dep_time.weekOfYear"),
    }
    /**
     * Date Attribute: Dep time - Month of Year
     * Date Attribute ID: dep_time.monthOfYear
     */,
    DepTimeMonthOfYear: {
      ref: idRef("dep_time.monthOfYear", "attribute"),
      identifier: "dep_time.monthOfYear"
      /**
       * Display Form Title: Dep time - Month of Year
       * Display Form ID: dep_time.monthOfYear
       */,
      Default: newAttribute("dep_time.monthOfYear"),
    }
    /**
     * Date Attribute: Dep time - Quarter of Year
     * Date Attribute ID: dep_time.quarterOfYear
     */,
    DepTimeQuarterOfYear: {
      ref: idRef("dep_time.quarterOfYear", "attribute"),
      identifier: "dep_time.quarterOfYear"
      /**
       * Display Form Title: Dep time - Quarter of Year
       * Display Form ID: dep_time.quarterOfYear
       */,
      Default: newAttribute("dep_time.quarterOfYear"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Airports - by facility type
   * Insight ID: airports_by_facility_type
   */
  AirportsByFacilityType: "airports_by_facility_type"
  /**
   * Insight Title: Airports - by region, state and facility type
   * Insight ID: airports_by_region_state_facility_type
   */,
  AirportsByRegionStateAndFacilityType: "airports_by_region_state_facility_type"
  /**
   * Insight Title: Airports - by state
   * Insight ID: airports_by_state
   */,
  AirportsByState: "airports_by_state"
  /**
   * Insight Title: Carriers - overview
   * Insight ID: carriers_overview
   */,
  CarriersOverview: "carriers_overview"
  /**
   * Insight Title: Flights - by carrier
   * Insight ID: flights_by_carrier
   */,
  FlightsByCarrier: "flights_by_carrier"
  /**
   * Insight Title: Flights - by month
   * Insight ID: flights_by_month
   */,
  FlightsByMonth: "flights_by_month"
  /**
   * Insight Title: Flights - by origin
   * Insight ID: flights_by_origin
   */,
  FlightsByOrigin: "flights_by_origin"
  /**
   * Insight Title: Pivoting Example - Table
   * Insight ID: pivoting_example_table
   */,
  PivotingExampleTable: "pivoting_example_table"
  /**
   * Insight Title: Pivoting Example - TreeMap
   * Insight ID: pivoting_example_treemap
   */,
  PivotingExampleTreeMap: "pivoting_example_treemap"
  /**
   * Insight Title: Time - Carriers over time
   * Insight ID: time_carriers_over_time
   */,
  TimeCarriersOverTime: "time_carriers_over_time",
};
export const Dashboards = {
  /**
   * Dashboard Title: 01 - Airports
   * Dashboard ID: airports
   */
  _01Airports: "airports"
  /**
   * Dashboard Title: 03 - Carriers
   * Dashboard ID: carriers
   */,
  _03Carriers: "carriers"
  /**
   * Dashboard Title: 02 - Flights
   * Dashboard ID: flights
   */,
  _02Flights: "flights",
};
