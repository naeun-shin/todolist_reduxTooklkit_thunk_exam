# component 구현 함수
```javascript
    const onAddTodo = () => {
        /**
         * 시험 문제 1.
         * 이곳에서 추가하기 기능을 구현해주세요.
         */
        if (title && body) {
          dispatch(
            __addToDo({
              id,
              title,
              body,
            })
          );
          resetInputs(); // 입력 값 초기화
        }
      };
    
      const onDeleteTodo = (id) => {
        /**
         * 시험 문제 2.
         * 이곳에서 삭제하기 기능을 구현해주세요.
         */
        dispatch(__deleteTodo(id));
      };
```

# Redux toolkit의 “thunk”와 비동기 함수
```javascript
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
```

# Reducers 구현 함수
```javascript
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
```
