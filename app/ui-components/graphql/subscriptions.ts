/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const onCreateConsentGiven = /* GraphQL */ `
  subscription OnCreateConsentGiven(
    $filter: ModelSubscriptionConsentGivenFilterInput
    $owner: String
  ) {
    onCreateConsentGiven(filter: $filter, owner: $owner) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
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
export const onCreateRaceTime = /* GraphQL */ `
  subscription OnCreateRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onCreateRaceTime(filter: $filter, owner: $owner) {
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
export const onCreateShoppingListItem = /* GraphQL */ `
  subscription OnCreateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onCreateShoppingListItem(filter: $filter, owner: $owner) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
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
export const onCreateTtTask = /* GraphQL */ `
  subscription OnCreateTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onCreateTtTask(filter: $filter, owner: $owner) {
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
export const onCreateTtTaskTimeBlock = /* GraphQL */ `
  subscription OnCreateTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onCreateTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
export const onCreateTx = /* GraphQL */ `
  subscription OnCreateTx(
    $filter: ModelSubscriptionTxFilterInput
    $owner: String
  ) {
    onCreateTx(filter: $filter, owner: $owner) {
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
export const onDeleteConsentGiven = /* GraphQL */ `
  subscription OnDeleteConsentGiven(
    $filter: ModelSubscriptionConsentGivenFilterInput
    $owner: String
  ) {
    onDeleteConsentGiven(filter: $filter, owner: $owner) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
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
export const onDeleteRaceTime = /* GraphQL */ `
  subscription OnDeleteRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onDeleteRaceTime(filter: $filter, owner: $owner) {
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
export const onDeleteShoppingListItem = /* GraphQL */ `
  subscription OnDeleteShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onDeleteShoppingListItem(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
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
export const onDeleteTtTask = /* GraphQL */ `
  subscription OnDeleteTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onDeleteTtTask(filter: $filter, owner: $owner) {
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
export const onDeleteTtTaskTimeBlock = /* GraphQL */ `
  subscription OnDeleteTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onDeleteTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
export const onDeleteTx = /* GraphQL */ `
  subscription OnDeleteTx(
    $filter: ModelSubscriptionTxFilterInput
    $owner: String
  ) {
    onDeleteTx(filter: $filter, owner: $owner) {
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
export const onUpdateConsentGiven = /* GraphQL */ `
  subscription OnUpdateConsentGiven(
    $filter: ModelSubscriptionConsentGivenFilterInput
    $owner: String
  ) {
    onUpdateConsentGiven(filter: $filter, owner: $owner) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
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
export const onUpdateRaceTime = /* GraphQL */ `
  subscription OnUpdateRaceTime(
    $filter: ModelSubscriptionRaceTimeFilterInput
    $owner: String
  ) {
    onUpdateRaceTime(filter: $filter, owner: $owner) {
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
export const onUpdateShoppingListItem = /* GraphQL */ `
  subscription OnUpdateShoppingListItem(
    $filter: ModelSubscriptionShoppingListItemFilterInput
    $owner: String
  ) {
    onUpdateShoppingListItem(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
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
export const onUpdateTtTask = /* GraphQL */ `
  subscription OnUpdateTtTask(
    $filter: ModelSubscriptionTtTaskFilterInput
    $owner: String
  ) {
    onUpdateTtTask(filter: $filter, owner: $owner) {
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
export const onUpdateTtTaskTimeBlock = /* GraphQL */ `
  subscription OnUpdateTtTaskTimeBlock(
    $filter: ModelSubscriptionTtTaskTimeBlockFilterInput
    $owner: String
  ) {
    onUpdateTtTaskTimeBlock(filter: $filter, owner: $owner) {
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
export const onUpdateTx = /* GraphQL */ `
  subscription OnUpdateTx(
    $filter: ModelSubscriptionTxFilterInput
    $owner: String
  ) {
    onUpdateTx(filter: $filter, owner: $owner) {
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
