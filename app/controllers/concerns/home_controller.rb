class HomeController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :delete]

  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
  end
end
