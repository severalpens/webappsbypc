/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateSongList = /* GraphQL */ `
  subscription OnCreateSongList(
    $filter: ModelSubscriptionSongListFilterInput
    $owner: String
  ) {
    onCreateSongList(filter: $filter, owner: $owner) {
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
export const onDeleteSongList = /* GraphQL */ `
  subscription OnDeleteSongList(
    $filter: ModelSubscriptionSongListFilterInput
    $owner: String
  ) {
    onDeleteSongList(filter: $filter, owner: $owner) {
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
export const onUpdateSongList = /* GraphQL */ `
  subscription OnUpdateSongList(
    $filter: ModelSubscriptionSongListFilterInput
    $owner: String
  ) {
    onUpdateSongList(filter: $filter, owner: $owner) {
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
