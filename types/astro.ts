export interface RootObject {
  status: string;
  data: Data;
}

export interface Data {
  name: string;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  city: string;
  nation: string;
  lng: number;
  lat: number;
  tz_str: string;
  zodiac_type: string;
  local_time: number;
  utc_time: number;
  julian_day: number;
  sun: Point;
  moon: Point;
  mercury: Point;
  venus: Point;
  mars: Point;
  jupiter: Point;
  saturn: Point;
  uranus: Point;
  neptune: Point;
  pluto: Point;
  first_house: Point;
  second_house: Point;
  third_house: Point;
  fourth_house: Point;
  fifth_house: Point;
  sixth_house: Point;
  seventh_house: Point;
  eighth_house: Point;
  ninth_house: Point;
  tenth_house: Point;
  eleventh_house: Point;
  twelfth_house: Point;
  mean_node: Point;
  true_node: Point;
  lunar_phase: LunarPhase;
}

export interface Point {
  name: string;
  quality: Quality;
  element: Element;
  sign: string;
  sign_num: number;
  position: number;
  abs_pos: number;
  emoji: string;
  point_type: PointType;
  house?: string;
  retrograde?: boolean;
}

export enum Element {
  Air = "Air",
  Earth = "Earth",
  Fire = "Fire",
  Water = "Water",
}

export enum PointType {
  House = "House",
  Planet = "Planet",
}

export enum Quality {
  Cardinal = "Cardinal",
  Fixed = "Fixed",
  Mutable = "Mutable",
}

export interface LunarPhase {
  degrees_between_s_m: number;
  sun_phase: number;
  moon_phase: number;
  moon_emoji: string;
}
