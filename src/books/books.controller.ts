import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

import { createBooksDto } from './dto/createBooks.dto';
import { Book } from './interfaces/books.interface';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  searchBooks(): Book[] {
    return this.bookService.listAll();
  }
  @Get(':id')
  infoBooks(@Param('id') id: string): Book {
    return this.bookService.infoBook(parseInt(id));
  }
  @Post()
  createBooks(@Body() infoBooks: createBooksDto) {
    this.bookService.createBook(infoBooks);
    // return `A new book was create. The book have ${infoBooks.pages} pages`;
  }
  @Put(':id')
  editBooks(@Param('id') id: string, @Body() UpdateBook: Book) {
    return this.bookService.editBook(parseInt(id), UpdateBook);
  }
  @Delete(':id')
  deleteBooks(@Param('id') id: string): void {
    return this.bookService.deleteBook(parseInt(id));
  }
}
