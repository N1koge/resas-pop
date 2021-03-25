export type PrefCode = number;
export type PrefName = string;
export type Selected = boolean;

export type Pref = {
  prefCode: PrefCode;
  prefName: PrefName;
};

export type Pop = {
  year: number;
  value: number;
  rate?: number;
};

export type PopResData = {
  label: string;
  data: Pop[];
};

export type PopData = { prefName: PrefName; data: Pop[]; color: string };

type ResasResBase = {
  message: null | string;
};

export type ResasPrefRes = ResasResBase & {
  result: Pref[];
};

export type ResasPopRes = ResasResBase & {
  result: {
    boundaryYear: number;
    data: PopResData[];
  };
};

export type PrefMap = Map<PrefName, { prefCode: PrefCode; selected: Selected }>;
