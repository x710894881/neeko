import {get, del, post} from "@/plugins/request"

const zoneUrl = "/zones"

export function listZones (page, size) {
  return get(`${zoneUrl}?pageNum=${page}&pageSize=${size}`)
}

export function deleteZoneBy (name) {
  return del(zoneUrl + "/" + name)
}

export function searchZone (page, size, condition) {
  return post(`${zoneUrl}/search?pageNum=${page}&pageSize=${size}`, condition)
}

export function listCloudZones (data) {
  return post(`${zoneUrl}/clusters`, data)
}

export function listDatastores (data) {
  return post(`${zoneUrl}/datastores`, data)
}

export function listTemplates (data) {
  return post(`${zoneUrl}/templates`, data)
}

export function createZone (data) {
  return post(`${zoneUrl}`, data)
}