import api from './api-config';

export const getAllWorkouts = async () => {
  const resp = await api.get('/workouts');
  return resp.data;
}

export const getOneWorkout = async (id) => {
  const resp = await api.get(`/workouts/${id}`);
  return resp.data;
}

export const postWorkout = async (workoutData) => {
  const resp = await api.post('/workouts', { workout: workoutData });
  return resp.data;
}

export const putWorkout = async (id, workoutData) => {
  const resp = await api.put(`/workouts/${id}`, { workout: workoutData });
  return resp.data;
}

export const destroyWorkout = async (id) => {
  const resp = await api.delete(`/workouts/${id}`);
  return resp;
}