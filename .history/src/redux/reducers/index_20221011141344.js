import { combineReducers } from "redux";
import { podcastListReducer } from "./PodcastListReducer";

export const reducer = combineReducers({
	podcastList: podcastListReducer
})