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
exports.PublisherResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const publisher_service_1 = require("./publisher.service");
const publisher_entity_1 = require("./entities/publisher.entity");
const create_publisher_input_1 = require("./dto/create-publisher.input");
const update_publisher_input_1 = require("./dto/update-publisher.input");
let PublisherResolver = class PublisherResolver {
    publisherService;
    constructor(publisherService) {
        this.publisherService = publisherService;
    }
    createPublisher(createPublisherInput) {
        return this.publisherService.create(createPublisherInput);
    }
    findAll() {
        return this.publisherService.findAll();
    }
    updatePublisher(updatePublisherInput) {
        return this.publisherService.update(updatePublisherInput.id, updatePublisherInput);
    }
    removePublisher(id) {
        return this.publisherService.remove(id);
    }
};
exports.PublisherResolver = PublisherResolver;
__decorate([
    (0, graphql_1.Mutation)(() => publisher_entity_1.Publisher),
    __param(0, (0, graphql_1.Args)('createPublisherInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publisher_input_1.CreatePublisherInput]),
    __metadata("design:returntype", void 0)
], PublisherResolver.prototype, "createPublisher", null);
__decorate([
    (0, graphql_1.Query)(() => [publisher_entity_1.Publisher], { name: 'publisher' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublisherResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => publisher_entity_1.Publisher),
    __param(0, (0, graphql_1.Args)('updatePublisherInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_publisher_input_1.UpdatePublisherInput]),
    __metadata("design:returntype", void 0)
], PublisherResolver.prototype, "updatePublisher", null);
__decorate([
    (0, graphql_1.Mutation)(() => publisher_entity_1.Publisher),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PublisherResolver.prototype, "removePublisher", null);
exports.PublisherResolver = PublisherResolver = __decorate([
    (0, graphql_1.Resolver)(() => publisher_entity_1.Publisher),
    __metadata("design:paramtypes", [publisher_service_1.PublisherService])
], PublisherResolver);
//# sourceMappingURL=publisher.resolver.js.map