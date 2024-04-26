import type {
  Datei,
  DownloadFile,
  DownloadFilesResponse,
  Stat,
  StatsResponse,
  UeberResponse,
} from "../types/StrapiResponse";
import { STRAPI_URL } from "./config";

export async function getDownloadFiles(): Promise<DownloadFile[]> {
  const response = await fetch(`${STRAPI_URL}/api/downloads?populate=Datei`);
  if (!response.ok) {
    return [];
  }
  const data: DownloadFilesResponse = await response.json();

  var ret: DownloadFile[] = [];

  data.data.map((d) => {
    ret.push({
      id: d.id,
      Titel: d.attributes.Titel,
      Datei: STRAPI_URL + d.attributes.Datei.data.attributes.url,
    });
  });

  return ret;
}

export async function getStats(): Promise<Stat[]> {
  const response = await fetch(`${STRAPI_URL}/api/zahlens`);
  if (!response.ok) {
    return [];
  }
  const data: StatsResponse = await response.json();

  var ret: Stat[] = [];

  data.data.map((d) => {
    ret.push({
      id: d.id,
      Titel: d.attributes.Titel,
      Wert: d.attributes.Wert,
      Einheit: d.attributes.Einheit || "",
    });
  });

  return ret;
}

export async function getUeber(): Promise<string> {
  const response = await fetch(`${STRAPI_URL}/api/ueber-uns`);
  if (!response.ok) {
    return "";
  }
  const data: UeberResponse = await response.json();

  return data.data.attributes.Text;
}
