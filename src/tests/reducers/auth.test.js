import authReducers from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: '12A'
  }
  const state = authReducers('12A', action);
  expect(state).toEqual({uid : '12A'});
});

test('should set logout', () => {
  const action = {
    type: 'LOGOUT'
  }
  const state = authReducers({uid: '12A'}, action);
  expect(state).toEqual({});
});
