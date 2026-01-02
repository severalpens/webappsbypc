/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createSongList = /* GraphQL */ `
  mutation CreateSongList(
    $condition: ModelSongListConditionInput
    $input: CreateSongListInput!
  ) {
    createSongList(condition: $condition, input: $input) {
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
export const deleteSongList = /* GraphQL */ `
  mutation DeleteSongList(
    $condition: ModelSongListConditionInput
    $input: DeleteSongListInput!
  ) {
    deleteSongList(condition: $condition, input: $input) {
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
export const updateSongList = /* GraphQL */ `
  mutation UpdateSongList(
    $condition: ModelSongListConditionInput
    $input: UpdateSongListInput!
  ) {
    updateSongList(condition: $condition, input: $input) {
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
