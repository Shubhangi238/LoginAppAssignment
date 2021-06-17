import * as Actions from './user.actions';

describe('Store > UserActionTypes', () => {
  it('should create a GerUser action', () => {
    const action = new Actions.GetUser();
    expect(action.type).toEqual('[GET USER]');
  });

  it('should create a GerUserSuccess action containing a payload', () => {
    const payload = {
        users: [
            {
                id: 0,
                user: 'abc@fandango.com'
            }
        ]
    };
    const action = new Actions.GetUserSuccess(payload);
    expect({ ...action }).toEqual({
      type: Actions.UserActionTypes.GET_USER_SUCCESS,
      payload
    });
  });

  it('should create a GerUserFailure action', () => {
    const action = new Actions.GetUserFailure();
    expect(action.type).toEqual('[GET_USER] FAILURE');
  });

  it('should create a LoginSuccess action', () => {
    const action = new Actions.LoginSuccess();
    expect(action.type).toEqual('[LOGIN] SUCCESS');
  });

  it('should create a LoginFailure action', () => {
    const action = new Actions.LoginFailure();
    expect(action.type).toEqual('[LOGIN] FAILURE');
  });

  it('should create a LogoutSuccess action', () => {
    const action = new Actions.LogoutSuccess();
    expect(action.type).toEqual('[LOGOUT] SUCCESS');
  });

  it('should create a LogoutFailure action', () => {
    const action = new Actions.LogoutFailure();
    expect(action.type).toEqual('[LOGOUT] FAILURE');
  });

});
