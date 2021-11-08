import axios from 'axios';

export const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

export const fetchEventsBegin = () => ({
  type: FETCH_EVENTS_BEGIN
});

export const fetchEventsSuccess = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: { events }
});

export const fetchEventsFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  payload: { error }
});

export function fetchEvents(startDate, endDate) {
  return dispatch => {
    dispatch(fetchEventsBegin());
    return axios.get(`/events.json?start_date=${startDate}&end_date=${endDate}`, {
    })
      .then(json => {
        dispatch(fetchEventsSuccess(json.data.events));
        return json.data.events;
      })
      .catch(error => dispatch(fetchEventsFailure(error.response.data)));
  };
}