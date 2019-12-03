class ArticleController < ApplicationController
    before_action :authorize_request

    # GET /articles
	def index
		@articles = Article.all
		render json: @articles, status: :ok
	end

	# GET /articles/:id
	def show
    @article = Article.find(params[:id])
    render json: @article, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { errors: 'Article not found' }, status: :not_found
	end

    # POST /articles
  	def create
    	@article = Article.new(user_params)
    	if @article.save
      		render json: @article, status: :created
    	else
      	render json: { errors: @article.errors.full_messages },
          	status: :unprocessable_entity
    	end
 	end

    # PUT /articles/:id
    def update
        unless @article.update(user_params)
        render json: { errors: @article.errors.full_messages },
        status: :unprocessable_entity
        end
    end

    # DELETE /users/{id}
    def destroy
        @article.destroy
    end

    private

    def find_article_by_user_id
        @article = article.find_by_user_id!(params[:user_id])
        rescue ActiveRecord::RecordNotFound
        render json: { errors: 'Article not found' }, status: :not_found
    end

    def user_params
        params.permit(
        :user_id, :title, :description
        )
    end
end
