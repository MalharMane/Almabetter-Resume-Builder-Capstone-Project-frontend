import { createStore } from "redux";
import { combineReducers } from "redux";
import {
  selectedTemplateReducer,
  personalInfoReducer,
  workExperienceReducer,
  keySkillsReducer,
  educationDetailsReducer,
} from "./reducers";

export const store = createStore(
  combineReducers({
    selectedTemplateReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
  })
);
