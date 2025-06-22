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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_entity_1 = require("../../author/entities/author.entity");
const publisher_entity_1 = require("../../publisher/entities/publisher.entity");
let Book = class Book {
    id;
    title;
    type;
    price;
    author;
    publisher;
};
exports.Book = Book;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Book.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    (0, graphql_1.Field)(() => author_entity_1.Author),
    __metadata("design:type", author_entity_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(() => publisher_entity_1.Publisher),
    __metadata("design:type", publisher_entity_1.Publisher)
], Book.prototype, "publisher", void 0);
exports.Book = Book = __decorate([
    (0, graphql_1.ObjectType)()
], Book);
//# sourceMappingURL=book.entity.js.map