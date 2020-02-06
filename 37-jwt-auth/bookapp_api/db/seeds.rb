user1 = User.create(username: 'test', password: 'test')
book1 = Book.create(title: 'Test Book', img: 'Test URL', user_id: user1.id)
