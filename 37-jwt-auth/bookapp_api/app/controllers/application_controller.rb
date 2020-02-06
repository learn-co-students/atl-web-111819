class ApplicationController < ActionController::API

  def current_user
    token = request.headers['Access-Token']
    user_id = JWT.decode(token, ENV['SECRET'])[0]["user_id"]
  end

  def authenticate!
   unless current_user
     return nil
   end
 end

end
