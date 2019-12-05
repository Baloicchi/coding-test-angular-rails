class ArticleController < ApplicationController
    before_action :authorize_request

    # GET /articles
	def index
		@articles = Article.all
		render json: @articles, include: {user: {only: [:name]}}, status: :ok
	end

	# GET /articles/:id
	def show
		@article = Article.find(params[:id])
		render json: @article, include: {user: {only: [:name]}}, status: :ok
		rescue ActiveRecord::RecordNotFound
		  render json: { errors: 'Article not found' }, status: :not_found
	end

    # POST /articles
  	def create
		@user = User.find(params[:user_id])
    	@article = Article.new(:user => @user, :title => params[:title], :description => params[:description])
    	if @article.save
      		render json: @article, status: :ok
    	else
      	render json: { errors: @article.errors.full_messages },
          	status: :unprocessable_entity
    	end
        rescue ActiveRecord::RecordNotFound
          render json: { errors: 'User not found' }, status: :not_found
 	end

    # PUT /articles/:id
    def update
        @article = Article.find(params[:id])
        if @article.update(article_params)
            render json: { msg: "updated"}, status: :ok
        else
            render json: { errors: @article.errors.full_messages }, status: :unprocessable_entity
        end
        rescue ActiveRecord::RecordNotFound
          render json: { errors: 'User not found' }, status: :not_found
    end

    # DELETE /articles/:id
    def destroy
        if Article.destroy(params[:id])
            render json: { msg: "deleted"}, status: :ok
        else
            render json: { errors: @article.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def article_params
        params.permit(:title, :description)
    end
end
