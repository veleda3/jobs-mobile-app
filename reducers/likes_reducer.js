import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';
import {
  LIKE_JOB, CLEAR_LIKED_JOBS
} from '../actions/types';

// use lodash whenever you want to parse an object {}
export default function (state = [], action) {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likes || [];
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
}
