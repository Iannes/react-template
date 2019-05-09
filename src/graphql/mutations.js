// eslint-disable
// this is an auto generated file. This will be overwritten

export const createWeddingBudget = `mutation CreateWeddingBudget($input: CreateWeddingBudgetInput!) {
  createWeddingBudget(input: $input) {
    id
    targetBudget
    totalBooked
    numberOfGuests
    items {
      items {
        id
        category
        name
        estimatedAmount
        totalAmount
      }
      nextToken
    }
  }
}
`;
export const updateWeddingBudget = `mutation UpdateWeddingBudget($input: UpdateWeddingBudgetInput!) {
  updateWeddingBudget(input: $input) {
    id
    targetBudget
    totalBooked
    numberOfGuests
    items {
      items {
        id
        category
        name
        estimatedAmount
        totalAmount
      }
      nextToken
    }
  }
}
`;
export const deleteWeddingBudget = `mutation DeleteWeddingBudget($input: DeleteWeddingBudgetInput!) {
  deleteWeddingBudget(input: $input) {
    id
    targetBudget
    totalBooked
    numberOfGuests
    items {
      items {
        id
        category
        name
        estimatedAmount
        totalAmount
      }
      nextToken
    }
  }
}
`;
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    id
    category
    name
    estimatedAmount
    totalAmount
    budget {
      id
      targetBudget
      totalBooked
      numberOfGuests
      items {
        nextToken
      }
    }
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
    category
    name
    estimatedAmount
    totalAmount
    budget {
      id
      targetBudget
      totalBooked
      numberOfGuests
      items {
        nextToken
      }
    }
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
    category
    name
    estimatedAmount
    totalAmount
    budget {
      id
      targetBudget
      totalBooked
      numberOfGuests
      items {
        nextToken
      }
    }
  }
}
`;
