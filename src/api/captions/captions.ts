import { axiosInstance, AxiosWrappedApiCall } from "api/axios";
import { Captions, CaptionsData, LanguageMetadata } from "models/Captions";
import { notificationManager } from "utils/notification/NotificationManager";

export const getLanguagesMetadata: AxiosWrappedApiCall<LanguageMetadata[]> = (config) => {
  return axiosInstance.get(`/mockApi/captions/languagesMetadata.json`, config).then((response) => response.data);
}

export const getCaptionsByPreferredLanguages: AxiosWrappedApiCall<CaptionsData, [userPreferredLocales: readonly string[]]> = (userPreferredLocales, config) => {
  //return axiosInstance.post(`/mockApi/captions/get`, languages).then((response) => response.data);
  // the following code simulates a BE call
  return axiosInstance.get(`/mockApi/captions/languagesMetadata.json`).then((response) => {
    const languagesMetadata: LanguageMetadata[] = response.data;

    let captionsMetadata: LanguageMetadata | undefined = undefined;

    const preferredLanguages = [...userPreferredLocales, "en_EN"]
    let index = 0;
    for (const language of preferredLanguages) {
      captionsMetadata = languagesMetadata.find(metadata => metadata.locales.some(captionLocale => captionLocale === language))
      if (captionsMetadata) {
        if (index !== 0) notificationManager.create({
          title: "We're still not compatible with your preferred language!",
          message: `Your preferred language was '${preferredLanguages[0]}'. We have loaded the captions in ${captionsMetadata.name} (${captionsMetadata.locales[0]}) instead.`,
          type: "warning",
          permanent: true,
        });
        break;
      }
      index++
    }

    if (!captionsMetadata) return Promise.reject("No captions found for neither user locales nor english")

    return axiosInstance.get(`/mockApi/captions/${captionsMetadata.filePath}`).then((response) => {
      const captions: Captions = response.data
      const responseData: CaptionsData = { captions, name: captionsMetadata!.name, locales: captionsMetadata!.locales }
      return responseData
    })
  });
}