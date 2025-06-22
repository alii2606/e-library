import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Mutation(() => Book)
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query(() => [Book], { name: 'book' })
  findAll() {
    console.log("get books");
    return this.bookService.findAll();
  }

  @Mutation(()=>Book)
createComment(
  @Context() context,
  @Args("createCommentInput") createBookInput:CreateBookInput
){
   return this.bookService.create(createBookInput);
}


}
