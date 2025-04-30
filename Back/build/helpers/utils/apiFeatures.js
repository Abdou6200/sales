"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = [
            'page',
            'sort',
            'limit',
            'fields',
            'deleted',
            'perPage',
            'search',
            'populate', // Added populate to excluded fields
        ];
        excludedFields.forEach((el) => delete queryObj[el]);
        let checkForValidMongoDbID = new RegExp('^[0-9a-fA-F]{24}$');
        const queryStrObj = {};
        for (const key in queryObj) {
            let value = queryObj[key];
            if (Array.isArray(value)) {
                value = value.map((v) => checkForValidMongoDbID.test(v) ? new mongodb_1.ObjectId(v).toString() : v);
            }
            else if (value === 'true' || value === 'false') {
                //@ts-ignore
                value = value === 'true'; // Explicit cast to string
            }
            else if (checkForValidMongoDbID.test(value)) {
                //@ts-ignore
                value = new mongodb_1.ObjectId(value);
            }
            queryStrObj[key] = value;
        }
        if (Object.keys(queryStrObj).length) {
            const queryOption = Object.keys(queryStrObj).map((field) => {
                const value = queryStrObj[field];
                if (Array.isArray(value)) {
                    return { [field]: { $in: value } };
                }
                else if (typeof value === 'boolean') {
                    return { [field]: value };
                }
                else if (value instanceof mongodb_1.ObjectId) {
                    return { [field]: value };
                }
                else {
                    return { [field]: { $regex: value, $options: 'i' } };
                }
            });
            this.query = this.query.find({ $and: queryOption });
        }
        return this;
    }
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        }
        else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }
    limitFields() {
        var _a;
        if ((_a = this.queryString) === null || _a === void 0 ? void 0 : _a.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }
        return this;
    }
    populate() {
        var _a;
        if ((_a = this.queryString) === null || _a === void 0 ? void 0 : _a.populate) {
            // Parse the populate string into an array of objects
            const populateFields = this.queryString.populate
                .split(',')
                .map((field) => {
                const [path, select] = field.split(':');
                return select
                    ? { path, select: select.split('|').join(' ') }
                    : { path };
            });
            // Apply populate for each field
            populateFields.forEach((popObj) => {
                this.query = this.query.populate(popObj);
            });
        }
        return this;
    }
    search(searchFields) {
        var _a;
        if ((_a = this.queryString) === null || _a === void 0 ? void 0 : _a.search) {
            const queryOption = searchFields.map((field) => ({
                [field]: { $regex: this.queryString.search, $options: 'i' },
            }));
            this.query = this.query.find({ $or: queryOption });
        }
        return this;
    }
    recherche(searchFields) {
        var _a;
        if ((_a = this.queryString) === null || _a === void 0 ? void 0 : _a.search) {
            let filter = [];
            const queryOption = searchFields.map((field) => filter.push({
                [field]: { $regex: this.queryString.search, $options: 'i' },
            }));
            this.query = this.query.find({ $or: filter });
        }
        return this;
    }
}
exports.default = APIFeatures;
//# sourceMappingURL=apiFeatures.js.map