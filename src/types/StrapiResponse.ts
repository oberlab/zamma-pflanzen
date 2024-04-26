export type Datei = {
  data: {
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
};

export type DownloadFilesResponse = {
  data: {
    id: number;
    attributes: {
      Titel: string;
      Datei: Datei;
    };
  }[];
  meta: {};
};

export type DownloadFile = {
  id: number;
  Titel: string;
  Datei: string;
};

export type StatsResponse = {
  data: {
    id: number;
    attributes: {
      Titel: string;
      Wert: number;
      Einheit: string;
    };
  }[];
  meta: {};
};

export type Stat = {
  id: number;
  Titel: string;
  Wert: number;
  Einheit: string;
};
