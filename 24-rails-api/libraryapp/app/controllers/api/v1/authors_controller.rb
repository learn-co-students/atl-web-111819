class Api::V1::AuthorsController < ApplicationController

  def index
    @authors = Author.all
    render json: @authors
  end

  def show
    @author = Author.find_by(id: params[:id])
    render json: @author, only: [:id, :name], include: :books
  end

  def create
  end

  def update
  end

  def destroy
    @author = Author.find_by(id: params[:id])
    @author.destroy
    byebug
    if @author.persisted?
      render json: { :message => "Destruction failed.. Try again!!" }
    else
      render json: { :message => "Destruction complete.. Bravo!!" }
    end
  end

  private
  def author_params
    params.require(:author)
  end

end
