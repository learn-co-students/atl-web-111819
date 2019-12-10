class BooksController < ApplicationController

    get '/books' do
        @books = Book.all
        erb :'books/index.html'
    end

    get '/books/new' do
        erb :"books/new"
    end

end