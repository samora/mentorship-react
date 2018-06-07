import { FULFILLED } from 'redux-promise-middleware';

const GET_RANDOM_DOG = 'dogs/get-random-dog';

//region actions
export function getRandomDogAction() {
  return {
    type: GET_RANDOM_DOG,
    payload: fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
  }
}
//endregion

const initialState = {
  dogImage: 'https://images.dog.ceo/breeds/boxer/n02108089_4440.jpg'
};

//region reducer
export function dogsReducer(state = initialState, action) {
  switch(action.type) {
    case `${GET_RANDOM_DOG}_${FULFILLED}`:
      return {
        ...state,
        dogImage: action.payload.message
      }
    default:
      return state;
  }
}
//endregion