const initialState = {
  lessons: [],
  loading: false,
  loaded: false,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type: string, payload: any }) => {
  const { type, payload } = action;
  switch (type) {
      
      default:
          return state;
  }
};