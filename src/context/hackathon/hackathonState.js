import React, { useReducer } from 'react';
import HackathonContext from './hackathonContext';
import HackathonReducer from './hackathonReducer';
import { GET_SIGNS, SET_SIGN, SET_LOADING } from './types';

const HackathonState = (props) => {
  const initialState = {
    signs: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(HackathonReducer, initialState);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  const getSigns = async () => {
    setLoading();
  };

  const setSigns = async () => {
    setLoading();
  }

  const { children } = props;

  return (
    <HackathonContext.Provider value={
        {
          signs: state.books,
          loading: state.loading,
          getSigns,
          setSigns,
        }
    }
    >
      {children}
    </HackathonContext.Provider>
  );
};

HackathonState.propTypes = {

};

export default HackathonState;
