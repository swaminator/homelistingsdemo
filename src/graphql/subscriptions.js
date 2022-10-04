/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMyModelType = /* GraphQL */ `
  subscription OnCreateMyModelType(
    $id: ID
    $title: String
    $comments: [String]
  ) {
    onCreateMyModelType(id: $id, title: $title, comments: $comments) {
      id
      title
      comments
    }
  }
`;
export const onUpdateMyModelType = /* GraphQL */ `
  subscription OnUpdateMyModelType(
    $id: ID
    $title: String
    $comments: [String]
  ) {
    onUpdateMyModelType(id: $id, title: $title, comments: $comments) {
      id
      title
      comments
    }
  }
`;
export const onDeleteMyModelType = /* GraphQL */ `
  subscription OnDeleteMyModelType(
    $id: ID
    $title: String
    $comments: [String]
  ) {
    onDeleteMyModelType(id: $id, title: $title, comments: $comments) {
      id
      title
      comments
    }
  }
`;
