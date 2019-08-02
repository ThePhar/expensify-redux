import authReducer from '../../reducers/auth';

test('Should set uid in auth state on login.', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: '123' });
    expect(state).toEqual({ uid: '123' });
});

test('Should clear auth state on logout.', () => {
    const state = authReducer({ uid: '123' }, { type: 'LOGOUT' });
    expect(state).toEqual({});
});
