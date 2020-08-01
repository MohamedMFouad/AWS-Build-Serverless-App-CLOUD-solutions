/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEcommerce = /* GraphQL */ `
  query GetEcommerce($id: ID!) {
    getEcommerce(id: $id) {
      id
      name
      price
      description
    }
  }
`;
export const listEcommerces = /* GraphQL */ `
  query ListEcommerces(
    $filter: ModelEcommerceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEcommerces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        description
      }
      nextToken
    }
  }
`;
