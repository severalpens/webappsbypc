/* tslint:disable */
// this is an auto generated file. This will be overwritten

export const getConsentGiven = /* GraphQL */ `
  query GetConsentGiven($id: ID!) {
    getConsentGiven(id: $id) {
      IsGiven
      createdAt
      id
      owner
      updatedAt
      __typename
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const getRaceTime = /* GraphQL */ `
  query GetRaceTime($id: ID!) {
    getRaceTime(id: $id) {
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
export const getShoppingListItem = /* GraphQL */ `
  query GetShoppingListItem($id: ID!) {
    getShoppingListItem(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const getTtTask = /* GraphQL */ `
  query GetTtTask($id: ID!) {
    getTtTask(id: $id) {
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
export const getTtTaskTimeBlock = /* GraphQL */ `
  query GetTtTaskTimeBlock($id: ID!) {
    getTtTaskTimeBlock(id: $id) {
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
export const getTx = /* GraphQL */ `
  query GetTx($id: ID!) {
    getTx(id: $id) {
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
export const listConsentGivens = /* GraphQL */ `
  query ListConsentGivens(
    $filter: ModelConsentGivenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsentGivens(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        IsGiven
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Email
        Message
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listRaceTimes = /* GraphQL */ `
  query ListRaceTimes(
    $filter: ModelRaceTimeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaceTimes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listShoppingListItems = /* GraphQL */ `
  query ListShoppingListItems(
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        IsCompleted
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        IsCompleted
        Name
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtTaskTimeBlocks = /* GraphQL */ `
  query ListTtTaskTimeBlocks(
    $filter: ModelTtTaskTimeBlockFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtTaskTimeBlocks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        EndTime
        StartTime
        TtTaskId
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTtTasks = /* GraphQL */ `
  query ListTtTasks(
    $filter: ModelTtTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTtTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        IsRunning
        ProjectName
        TaskName
        createdAt
        id
        owner
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listTxes = /* GraphQL */ `
  query ListTxes($filter: ModelTxFilterInput, $limit: Int, $nextToken: String) {
    listTxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
