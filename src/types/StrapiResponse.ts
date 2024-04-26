export type ImageResponse = {
  data: {
    id: number;
  };
  meta: {};
};

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
