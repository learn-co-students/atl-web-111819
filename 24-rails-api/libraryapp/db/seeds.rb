author1 = Author.create(name: 'Tolkien', bio: 'Love creating and using languages')
author2 = Author.create(name: 'King', bio: 'I write scary things..')

book1 = Book.create(name: 'The Hobbit', author_id: author1.id)
book2 = Book.create(name: 'Not the hobbit', author_id: author1.id)

book3 = Book.create(name: 'Definitly not the hobbit', author_id: author2.id)
