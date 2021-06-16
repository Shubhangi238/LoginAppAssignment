import * as Actions from './user.actions';

describe('Store > UserActionTypes', () => {
  it('should create a GerUser action', () => {
    const action = new Actions.GetUser();
    expect(action.type).toEqual('[GET USER]');
  });

  it('should create a GerUserSuccess action containing a payload', () => {
    const payload ={
        "users": [
            {
                "id": 0,
                "user": "abc@fandango.com"
            }
        ]
    }
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

  it('should create a AddUserSuccess action', () => {
    const action = new Actions.AddUserSuccess();
    expect(action.type).toEqual('[ADD_USER] SUCCESS');
  });

  it('should create a AddUserFailure action', () => {
    const action = new Actions.AddUserFailure();
    expect(action.type).toEqual('[ADD_USER] FAILURE');
  });

  it('should create a DeleteUserSuccess action', () => {
    const action = new Actions.DeleteUserSuccess();
    expect(action.type).toEqual('[DELETE_USER] SUCCESS');
  });

  it('should create a DeleteUserFailure action', () => {
    const action = new Actions.DeleteUserFailure();
    expect(action.type).toEqual('[DELETE_USER] FAILURE');
  });
  
});