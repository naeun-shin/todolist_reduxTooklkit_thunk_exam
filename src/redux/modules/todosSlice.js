import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  'addToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    // 여기에 추가 로직을 구현합니다.
    const { id, title, body } = payload;
    thunkAPI.dispatch(addTodo({ id, title, body }));
  }
);

export const __deleteTodo = createAsyncThunk(
  'deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    // 여기에 삭제 로직을 구현합니다.
    thunkAPI.dispatch(deleteTodo(payload));
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(...state.list);
      state.list = [...state.list, action.payload];
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
