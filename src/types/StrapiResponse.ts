export type ImageResponse = {
  data: {
    id: number;
  };
  meta: {};
};

export type DownloadFilesResponse = {
  data: {
    id: number;
    attributes: {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      File: {
        id: number;
        Titel: string;
      }[];
    };
  };
  meta: {};
};
