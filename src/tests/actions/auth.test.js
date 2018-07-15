import { login, logout } from '../../actions/auth';

test('should set up login', () => {
  const action = login('12A');
  expect(action).toEqual({
    type:'LOGIN',
    uid: '12A'
  })
});

test('should set up logout', () => {
  const action = logout();
  expect(action).toEqual({
    type:'LOGOUT'
  })
});
