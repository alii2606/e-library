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
exports.AuthorResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const author_service_1 = require("./author.service");
const author_entity_1 = require("./entities/author.entity");
const create_author_input_1 = require("./dto/create-author.input");
const update_author_input_1 = require("./dto/update-author.input");
let AuthorResolver = class AuthorResolver {
    authorService;
    constructor(authorService) {
        this.authorService = authorService;
    }
    createAuthor(createAuthorInput) {
        return this.authorService.create(createAuthorInput);
    }
    findAll() {
        return this.authorService.findAll();
    }
    updateAuthor(updateAuthorInput) {
        return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
    }
    removeAuthor(id) {
        return this.authorService.remove(id);
    }
};
exports.AuthorResolver = AuthorResolver;
__decorate([
    (0, graphql_1.Mutation)(() => author_entity_1.Author),
    __param(0, (0, graphql_1.Args)('createAuthorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_input_1.CreateAuthorInput]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "createAuthor", null);
__decorate([
    (0, graphql_1.Query)(() => [author_entity_1.Author], { name: 'author' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => author_entity_1.Author),
    __param(0, (0, graphql_1.Args)('updateAuthorInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_author_input_1.UpdateAuthorInput]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "updateAuthor", null);
__decorate([
    (0, graphql_1.Mutation)(() => author_entity_1.Author),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthorResolver.prototype, "removeAuthor", null);
exports.AuthorResolver = AuthorResolver = __decorate([
    (0, graphql_1.Resolver)(() => author_entity_1.Author),
    __metadata("design:paramtypes", [author_service_1.AuthorService])
], AuthorResolver);
//# sourceMappingURL=author.resolver.js.map