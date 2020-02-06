# JWT Authentication - Rails

### SWBATs
- [ ] Difference between -> Signup and login
- [ ] Difference between -> Authentication and Authorization
- [ ] `bcrypt`
- [ ] `dotenv-rails`
- [ ] `jwt`
- [ ] Abstraction of Code

#### Snippets

```ruby
  def create
    ...
    if @user && @user.authenticate(user_params[:password])
      token = JWT.encode({user_id: @user.id}, ENV['SECRET'])
      ...
    else
      ...
    end
  end
```

```ruby
  def current_user
    token = request.headers['Access-Token']
    user_id = JWT.decode(token, ENV['SECRET'])[0]["user_id"]
    ...
  end
```

```ruby
  def authenticate!
    unless current_user
      return nil
    end
  end
```

# JWT Authentication - React

### SWBATs
- [ ] Get authentication token
- [ ] Persist the authentication token
- [ ] Include the token in request headers
- [ ] Modify and maintain the flow
- [ ] `withRouter`

### Options for storing the token:

- Cookies (how we did it in rails)
    - Don't have the control in our app
- React state - cleared out every time we refresh
- Url in react-router
    - don't do this!!!
    - sharing a link shares someone's identity!
- localStorage
    - be there forever?
    - clear it - on sign out clear
- We would like to be able to expire tokens after a set amount of time
- 'stay signed in?'
- XSS

### Flow
#### Sign In
1. Login Form
2. Send the username and password
3. Store the token (and user info)
4. Send the token on future requests

#### Already Signed In
1. On mount, check if there is a token
2. If so, fetch user info
3. If not...
