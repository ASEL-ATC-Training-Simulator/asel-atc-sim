import {getApiUrl} from "./local_store_actions";
import axios from "axios";

export async function getAircraftList(withFms = false){
    const url = `${getApiUrl()}/aircraft/getAll${withFms ? "WithFms": ""}`;
    return (await axios.get(url)).data;
}

export async function getSimState(){
    const url = `${getApiUrl()}/aircraft/all/simState`;
    return (await axios.get(url)).data;
}

export async function pauseall(){
    const url = `${getApiUrl()}/aircraft/all/pause`;
    return (await axios.post(url, {})).data;
}

export async function unpauseall(){
    const url = `${getApiUrl()}/aircraft/all/unpause`;
    return (await axios.post(url, {})).data;
}

export async function setAllSimRate(simrate){
    const url = `${getApiUrl()}/aircraft/all/simrate`;
    return (await axios.post(url, {
        simRate: simrate,
        paused: true // This is currently useless
    })).data;
}

export async function pauseAircraft(callsign){
    const url = `${getApiUrl()}/aircraft/byCallsign/${callsign}/pause`;
    return (await axios.post(url, {})).data;
}

export async function unpauseAircraft(callsign){
    const url = `${getApiUrl()}/aircraft/byCallsign/${callsign}/unpause`;
    return (await axios.post(url, {})).data;
}

export async function setAircraftSimRate(callsign, simrate){
    const url = `${getApiUrl()}/aircraft/byCallsign/${callsign}/simrate`;
    return (await axios.post(url, {
        simRate: simrate,
        paused: true // This is currently useless
    })).data;
}

export async function removeAllAircraft(){
    const url = `${getApiUrl()}/aircraft/all/remove`;
    return (await axios.delete(url)).data;
}