"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const book_service_1 = require("./book.service");
const book_entity_1 = require("./entities/book.entity");
const create_book_input_1 = require("./dto/create-book.input");
let BookResolver = class BookResolver {
    bookService;
    constructor(bookService) {
        this.bookService = bookService;
    }
    createBook(createBookInput) {
        return this.bookService.create(createBookInput);
    }
    findAll() {
        console.log("get books");
        return this.bookService.findAll();
    }
    createComment(context, createBookInput) {
        return this.bookService.create(createBookInput);
    }
};
exports.BookResolver = BookResolver;
__decorate([
    (0, graphql_1.Mutation)(() => book_entity_1.Book),
    __param(0, (0, graphql_1.Args)('createBookInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_input_1.CreateBookInput]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, graphql_1.Query)(() => [book_entity_1.Book], { name: 'book' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => book_entity_1.Book),
    __param(0, (0, graphql_1.Context)()),
    __param(1, (0, graphql_1.Args)("createCommentInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_book_input_1.CreateBookInput]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "createComment", null);
exports.BookResolver = BookResolver = __decorate([
    (0, graphql_1.Resolver)(() => book_entity_1.Book),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookResolver);
//# sourceMappingURL=book.resolver.js.map