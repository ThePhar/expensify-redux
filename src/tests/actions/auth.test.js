import { login, logout } from '../../actions/auth';

test('Should setup login action.', () => {
    const action = login('123');
    expect(action).toEqual({ type: 'LOGIN', uid: '123' });
});

test('Should setup logout action.', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT' });
});