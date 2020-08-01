/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEcommerce = /* GraphQL */ `
  mutation CreateEcommerce(
    $input: CreateEcommerceInput!
    $condition: ModelEcommerceConditionInput
  ) {
    createEcommerce(input: $input, condition: $condition) {
      id
      name
      price
      description
    }
  }
`;
export const updateEcommerce = /* GraphQL */ `
  mutation UpdateEcommerce(
    $input: UpdateEcommerceInput!
    $condition: ModelEcommerceConditionInput
  ) {
    updateEcommerce(input: $input, condition: $condition) {
      id
      name
      price
      description
    }
  }
`;
export const deleteEcommerce = /* GraphQL */ `
  mutation DeleteEcommerce(
    $input: DeleteEcommerceInput!
    $condition: ModelEcommerceConditionInput
  ) {
    deleteEcommerce(input: $input, condition: $condition) {
      id
      name
      price
      description
    }
  }
`;
