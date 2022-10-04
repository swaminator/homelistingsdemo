/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyModelType = /* GraphQL */ `
  query GetMyModelType($id: ID!) {
    getMyModelType(id: $id) {
      id
      title
      comments
    }
  }
`;
export const listMyModelTypes = /* GraphQL */ `
  query ListMyModelTypes(
    $filter: TableMyModelTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyModelTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        comments
      }
      nextToken
    }
  }
`;
