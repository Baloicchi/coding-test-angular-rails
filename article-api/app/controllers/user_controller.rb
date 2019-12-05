class UserController < ApplicationController
	before_action :authorize_request, except: [:create, :find_user_by_email]

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
    	@user = User.new(:name => params[:name], :email => params[:email], :password => params[:password], :password_confirmation => params[:password_confirmation])
    	if @user.save
      		render json: @user, status: :created
    	else
      	render json: { errors: @user.errors.full_messages },
          	status: :unprocessable_entity
    	end
 	end

  # POST /user/:email
  def find_user_by_email
    @user = User.find_by_email(params[:email])
    if @user
      render json: { found: true }, status: :ok
    else
      render json: { found: false }, status: :ok
    end
    rescue ActiveRecord::RecordNotFound
      render json: { found: false }, status: :ok
  end

  def find_user
    @user = User.find!(params[:id])
    render json: { found: true }, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { found: false }, status: :ok
  end

  private

  def user_params
    params.permit(
      :name, :email, :password, :password_confirmation
    )
  end
end
