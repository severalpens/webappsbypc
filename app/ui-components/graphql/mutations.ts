/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const createConsentGiven = /* GraphQL */ `
  mutation CreateConsentGiven(
    $condition: ModelConsentGivenConditionInput
    $input: CreateConsentGivenInput!
  ) {
    createConsentGiven(condition: $condition, input: $input) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $condition: ModelContactConditionInput
    $input: CreateContactInput!
  ) {
    createContact(condition: $condition, input: $input) {
      Email
      Message
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createRaceTime = /* GraphQL */ `
  mutation CreateRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: CreateRaceTimeInput!
  ) {
    createRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createShoppingListItem = /* GraphQL */ `
  mutation CreateShoppingListItem(
    $condition: ModelShoppingListItemConditionInput
    $input: CreateShoppingListItemInput!
  ) {
    createShoppingListItem(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $condition: ModelTodoConditionInput
    $input: CreateTodoInput!
  ) {
    createTodo(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTtTask = /* GraphQL */ `
  mutation CreateTtTask(
    $condition: ModelTtTaskConditionInput
    $input: CreateTtTaskInput!
  ) {
    createTtTask(condition: $condition, input: $input) {
      IsRunning
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTtTaskTimeBlock = /* GraphQL */ `
  mutation CreateTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: CreateTtTaskTimeBlockInput!
  ) {
    createTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TtTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const createTx = /* GraphQL */ `
  mutation CreateTx($condition: ModelTxConditionInput, $input: CreateTxInput!) {
    createTx(condition: $condition, input: $input) {
      TxAmount
      TxCategory
      TxDate
      TxDateDate
      TxDateTime
      TxDescription
      TxType
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteConsentGiven = /* GraphQL */ `
  mutation DeleteConsentGiven(
    $condition: ModelConsentGivenConditionInput
    $input: DeleteConsentGivenInput!
  ) {
    deleteConsentGiven(condition: $condition, input: $input) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $condition: ModelContactConditionInput
    $input: DeleteContactInput!
  ) {
    deleteContact(condition: $condition, input: $input) {
      Email
      Message
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteRaceTime = /* GraphQL */ `
  mutation DeleteRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: DeleteRaceTimeInput!
  ) {
    deleteRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteShoppingListItem = /* GraphQL */ `
  mutation DeleteShoppingListItem(
    $condition: ModelShoppingListItemConditionInput
    $input: DeleteShoppingListItemInput!
  ) {
    deleteShoppingListItem(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $condition: ModelTodoConditionInput
    $input: DeleteTodoInput!
  ) {
    deleteTodo(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTtTask = /* GraphQL */ `
  mutation DeleteTtTask(
    $condition: ModelTtTaskConditionInput
    $input: DeleteTtTaskInput!
  ) {
    deleteTtTask(condition: $condition, input: $input) {
      IsRunning
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTtTaskTimeBlock = /* GraphQL */ `
  mutation DeleteTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: DeleteTtTaskTimeBlockInput!
  ) {
    deleteTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TtTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const deleteTx = /* GraphQL */ `
  mutation DeleteTx($condition: ModelTxConditionInput, $input: DeleteTxInput!) {
    deleteTx(condition: $condition, input: $input) {
      TxAmount
      TxCategory
      TxDate
      TxDateDate
      TxDateTime
      TxDescription
      TxType
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateConsentGiven = /* GraphQL */ `
  mutation UpdateConsentGiven(
    $condition: ModelConsentGivenConditionInput
    $input: UpdateConsentGivenInput!
  ) {
    updateConsentGiven(condition: $condition, input: $input) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $condition: ModelContactConditionInput
    $input: UpdateContactInput!
  ) {
    updateContact(condition: $condition, input: $input) {
      Email
      Message
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateRaceTime = /* GraphQL */ `
  mutation UpdateRaceTime(
    $condition: ModelRaceTimeConditionInput
    $input: UpdateRaceTimeInput!
  ) {
    updateRaceTime(condition: $condition, input: $input) {
      RaceDate
      RaceDistance
      RaceMins
      RaceSecs
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateShoppingListItem = /* GraphQL */ `
  mutation UpdateShoppingListItem(
    $condition: ModelShoppingListItemConditionInput
    $input: UpdateShoppingListItemInput!
  ) {
    updateShoppingListItem(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $condition: ModelTodoConditionInput
    $input: UpdateTodoInput!
  ) {
    updateTodo(condition: $condition, input: $input) {
      IsCompleted
      Name
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTtTask = /* GraphQL */ `
  mutation UpdateTtTask(
    $condition: ModelTtTaskConditionInput
    $input: UpdateTtTaskInput!
  ) {
    updateTtTask(condition: $condition, input: $input) {
      IsRunning
      ProjectName
      TaskName
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTtTaskTimeBlock = /* GraphQL */ `
  mutation UpdateTtTaskTimeBlock(
    $condition: ModelTtTaskTimeBlockConditionInput
    $input: UpdateTtTaskTimeBlockInput!
  ) {
    updateTtTaskTimeBlock(condition: $condition, input: $input) {
      EndTime
      StartTime
      TtTaskId
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const updateTx = /* GraphQL */ `
  mutation UpdateTx($condition: ModelTxConditionInput, $input: UpdateTxInput!) {
    updateTx(condition: $condition, input: $input) {
      TxAmount
      TxCategory
      TxDate
      TxDateDate
      TxDateTime
      TxDescription
      TxType
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
