class BooksController < ApplicationController

  before_action :authenticate!, only: [:index, :create]

  def index
    @books = Book.all
    render :json => @books
  end

  def show
    @book = Book.find_by(id: params[:id])
    render json: { :book => @book }
  end

  def create
    @book = Book.new(book_params)
    @book.user_id = current_user
    if @book.save!
      render json: @book
    else
      render json: { :msg => "book creation failed..." }
    end
  end

  def update
    @book = Book.find_by(id: params[:id])
    @book.update(book_params)
    if @book.save!
      render json: @book
    else
      render json: { :msg => "book update failed..." }
    end
  end

  def destroy
  end

  private
  def book_params
    params.require(:book).permit(:title, :img)
  end

end
