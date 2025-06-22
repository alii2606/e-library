import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { graphql } from 'graphql';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthorModule } from './author/author.module';
import { PublisherModule } from './publisher/publisher.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>(
      {
         driver:ApolloDriver,
         autoSchemaFile:join(process.cwd(),"src/graphql/schema.gql")
      }
    ),

    PrismaModule,

    UserModule,

    BookModule,

    AuthorModule,

    PublisherModule,

    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
