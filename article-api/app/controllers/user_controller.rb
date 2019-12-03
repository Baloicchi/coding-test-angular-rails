class UserController < ApplicationController
	before_action :authorize_request, except: :create

 	# GET /users
	def index
		@users = User.all
		render json: @users, status: :ok
	end

	# GET /users/:id
	def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
		
	end

  # POST /users
  	def create
    	@user = User.new(user_params)
    	if @user.save
      		render json: @user, status: :created
    	else
      	render json: { errors: @user.errors.full_messages },
          	status: :unprocessable_entity
    	end
 	end

  # PUT /users/:id
  def update
    unless @user.update(user_params)
      render json: { errors: @user.errors.full_messages },
      status: :unprocessable_entity
    end
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
  end

  private

  def find_user
    @user = User.find_by_email!(params[:email])
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'User not found' }, status: :not_found
  end

  def user_params
    params.permit(
      :name, :email, :password, :password_confirmation
    )
  end
end
