// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateWeddingBudget = `subscription OnCreateWeddingBudget {
  onCreateWeddingBudget {
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
export const onUpdateWeddingBudget = `subscription OnUpdateWeddingBudget {
  onUpdateWeddingBudget {
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
export const onDeleteWeddingBudget = `subscription OnDeleteWeddingBudget {
  onDeleteWeddingBudget {
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
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
