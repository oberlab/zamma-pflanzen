import type { DownloadFilesResponse } from "../types/StrapiResponse";
import { STRAPI_URL } from "./config";

export type DownloadFile = {
  id: number;
  name: string;
  url: string;
};

async function getImgURL(id: number) {
  const response = await fetch(`${STRAPI_URL}/files/lel/${id}`);
  const data = await response.json();
  const URL = data.url;
}

export async function getDownloadFiles(): Promise<DownloadFile[]> {
  const response = await fetch(`${STRAPI_URL}/api/downloads?populate=File`);
  const data: DownloadFilesResponse = await response.json();
  const Files = data.data.attributes.File;

  let files: DownloadFile[] = [];
  Files.forEach((file) => {
    const fileData = fetch(`${STRAPI_URL}/api/upload/files/${file.id}`)
      .then((res) => res.json())
      .then((res) => {
        files.push({
          id: file.id,
          name: file.Titel,
          url: res.url,
        });
      });
  });

  return files;
}
