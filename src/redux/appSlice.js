import { createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  
  //initialState
  initialState: {
      roomId: 'd2VRa0r7HAlmCSaZb9OY',
      messageLoading: false, 
  },

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },

    setLoadingTrue :(state) =>{
      state.messageLoading = true;
    },

    setLoadingFalse: (state)=>{
      state.messageLoading = false
    }
  },

});

export const { enterRoom, setLoadingTrue, setLoadingFalse} = appSlice.actions;
export default appSlice.reducer;

