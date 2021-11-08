import axios from 'axios';

export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_USER_AVAILABLE_SLOTS_BEGIN = 'FETCH_USER_AVAILABLE_SLOTS_BEGIN';
export const FETCH_USER_AVAILABLE_SLOTS_SUCCESS = 'FETCH_USER_AVAILABLE_SLOTS_SUCCESS';
export const FETCH_USER_AVAILABLE_SLOTS_FAILURE = 'FETCH_USER_AVAILABLE_SLOTS_FAILURE';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users }
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error }
});

export function fetchUsers() {
  return dispatch => {
    dispatch(fetchUsersBegin());
    return axios.get(`/users.json`, {
    })
      .then(json => {
        dispatch(fetchUsersSuccess(json.data.users));
        return json.data.users;
      })
      .catch(error => dispatch(fetchUsersFailure(error.response.data)));
  };
}

export const fetchUserAvailableSlotsBegin = () => ({
  type: FETCH_USER_AVAILABLE_SLOTS_BEGIN
});

export const fetchUserAvailableSlotsSuccess = (slots) => ({
  type: FETCH_USER_AVAILABLE_SLOTS_SUCCESS,
  payload: { slots }
});

export const fetchUserAvailableSlotsFailure = error => ({
  type: FETCH_USER_AVAILABLE_SLOTS_FAILURE,
  payload: { error }
});

export function fetchUserAvailableSlots(id, startDate, endDate) {
  return dispatch => {
    dispatch(fetchUserAvailableSlotsBegin());
    return axios.get(`/users/${id}/available_slots.json?start_date=${startDate}&end_date=${endDate}`, {
    })
      .then(json => {
        dispatch(fetchUserAvailableSlotsSuccess(json.data.available_slots));
        return json.data.available_slots;
      })
      .catch(error => dispatch(fetchUserAvailableSlotsFailure(error.response.data)));
  };
}