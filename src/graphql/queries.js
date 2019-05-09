// eslint-disable
// this is an auto generated file. This will be overwritten

export const getWeddingBudget = `query GetWeddingBudget($id: ID!) {
  getWeddingBudget(id: $id) {
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
export const listWeddingBudgets = `query ListWeddingBudgets(
  $filter: ModelWeddingBudgetFilterInput
  $limit: Int
  $nextToken: String
) {
  listWeddingBudgets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      targetBudget
      totalBooked
      numberOfGuests
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
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
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
    }
    nextToken
  }
}
`;
