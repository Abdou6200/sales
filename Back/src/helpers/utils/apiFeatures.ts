import { ObjectId } from 'mongodb';

class APIFeatures {
  query: any;
  queryString: any;
  constructor(query: any, queryString: any) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj: Record<string, string | string[]> = { ...this.queryString };
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

    const queryStrObj: Record<string, any> = {};

    for (const key in queryObj) {
      let value = queryObj[key];

      if (Array.isArray(value)) {
        value = value.map((v) =>
          checkForValidMongoDbID.test(v) ? new ObjectId(v).toString() : v
        );
      } else if (value === 'true' || value === 'false') {
        //@ts-ignore
        value = value === ('true' as string); // Explicit cast to string
      } else if (checkForValidMongoDbID.test(value)) {
        //@ts-ignore
        value = new ObjectId(value);
      }
      queryStrObj[key] = value;
    }

    if (Object.keys(queryStrObj).length) {
      const queryOption = Object.keys(queryStrObj).map((field: string) => {
        const value = queryStrObj[field];

        if (Array.isArray(value)) {
          return { [field]: { $in: value } };
        } else if (typeof value === 'boolean') {
          return { [field]: value };
        } else if (value instanceof ObjectId) {
          return { [field]: value };
        } else {
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
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString?.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(fields);
    }
    return this;
  }

  populate() {
    if (this.queryString?.populate) {
      // Parse the populate string into an array of objects
      const populateFields = this.queryString.populate
        .split(',')
        .map((field: string) => {
          const [path, select] = field.split(':');
          return select
            ? { path, select: select.split('|').join(' ') }
            : { path };
        });

      // Apply populate for each field
      populateFields.forEach((popObj: { path: string; select?: string }) => {
        this.query = this.query.populate(popObj);
      });
    }
    return this;
  }

  search(searchFields: any) {
    if (this.queryString?.search) {
      const queryOption = searchFields.map((field: any) => ({
        [field]: { $regex: this.queryString.search, $options: 'i' },
      }));
      this.query = this.query.find({ $or: queryOption });
    }
    return this;
  }

  recherche(searchFields: any) {
    if (this.queryString?.search) {
      let filter: any[] = [];
      const queryOption = searchFields.map((field: any) =>
        filter.push({
          [field]: { $regex: this.queryString.search, $options: 'i' },
        })
      );
      this.query = this.query.find({ $or: filter });
    }
    return this;
  }
}

export default APIFeatures;
