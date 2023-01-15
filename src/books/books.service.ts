import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/books.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];
  private findId(id: number): number {
    let indexFindId: number;
    this.books.forEach(function (book: Book, index: number) {
      if (book.book_id === id) {
        indexFindId = index;
      }
    });
    return indexFindId;
  }
  // A function to create Books
  createBook(infoBooks) {
    // A function to add id
    let lastId: number;
    function addId(matrixBooks): number {
      if (matrixBooks.length > 0) {
        lastId = matrixBooks[matrixBooks.length - 1].book_id + 1;
        return lastId;
      } else {
        return (lastId = 1);
      }
    }
    // A push function to array
    const newBook = {
      book_id: addId(this.books),
      ...infoBooks,
    };

    this.books.push(newBook);
  }
  // A function to consult all Books
  listAll(): Book[] {
    return this.books;
  }
  // A function to consult a Book in specific

  infoBook(id: number): Book {
    return this.books[this.findId(id)];
  }
  // A function to edit a Book
  editBook(id: number, infoBook: Book) {
    const indexEditBook = this.findId(id);
    this.books.splice(indexEditBook, 1, infoBook);
  }
  // A function to delete a Book
  deleteBook(id: number): void {
    const indexDeleteBook = this.findId(id);
    this.books.splice(indexDeleteBook, 1);
  }
}
