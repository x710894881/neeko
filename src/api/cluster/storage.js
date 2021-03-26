import {get, post, del} from "@/plugins/request"

const proxyUrl = "/proxy/kubernetes/{cluster_name}/{resource_url}"
const limit = 10

const persistentVolumesUrl = "api/v1/persistentvolumes"
const storageClassUrl = "apis/storage.k8s.io/v1/storageclasses"
const persistentVolumeClaimsUrl = "api/v1/persistentvolumeclaims"
const namespacePersistentVolumeClaimsUrl = "api/v1/namespaces/{namespace}/deployments"
const persistentVolumesOpUrl = "api/v1/persistentvolumes/{name}"
const storageClassOpUrl = "apis/storage.k8s.io/v1/storageclasses/{name}"


export function createPersistentVolume(clusterName, data) {
  const url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", persistentVolumesUrl)
  return post(url, data)
}

export function listPersistentVolumes(clusterName, continueToken) {
  let url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", persistentVolumesUrl)
  url += "?limit=" + limit
  if (continueToken !== undefined && continueToken !== null) {
    url += "&continue=" + continueToken
  }
  return get(url)
}

export function listStorageClass(clusterName, continueToken, all) {
  let url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", storageClassUrl)
  if (!all) {
    url += "?limit=" + limit
  }
  if (continueToken !== undefined && continueToken !== null) {
    url += "&continue=" + continueToken
  }
  return get(url)
}

export function createStorageClass(clusterName, data) {
  const url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", storageClassUrl)
  return post(url, data)
}

export function listPersistentVolumeClaims(clusterName, continueToken, namespace) {
  let url = proxyUrl.replace("{cluster_name}", clusterName)
  url += "?limit=" + limit
  if (continueToken !== undefined && continueToken !== null) {
    url += "&continue=" + continueToken
  }
  if (namespace !== undefined && namespace !== null) {
    url = url.replace("{resource_url}", namespacePersistentVolumeClaimsUrl).replace("{namespace}", namespace)
  } else {
    url = url.replace("{resource_url}", persistentVolumeClaimsUrl)
  }
  return get(url)
}
  
export function deleteStorageClass(clusterName, name) {
  const url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", storageClassOpUrl).replace("{name}", name)
  return del(url)
}

export function deletePersistentVolume(clusterName, name) {
  const url = proxyUrl.replace("{cluster_name}", clusterName).replace("{resource_url}", persistentVolumesOpUrl).replace("{name}", name)
  return del(url)
}