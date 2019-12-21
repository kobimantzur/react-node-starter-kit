import { push } from 'connected-react-router';

export const postRequest = () => dispatch => {
    dispatch(push('/results'));
}