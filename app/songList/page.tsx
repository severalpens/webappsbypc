"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);


const client = generateClient<Schema>();

export default function Page() {
  const [songs, setSongs] = useState<Array<Schema["SongList"]["type"]>>([]);

  function listSongs() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setSongs([...data.items]),
    });
  }

  useEffect(() => {
    listSongs();
  }, []);

  function createSong() {
    client.models.SongList.create({
      Name: window.prompt("Todo content"),
    });
  }

  return (
    <main>
      <h1>My Songs</h1>
      <button onClick={createSong}>+ new</button>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>{song.Name}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
          Review next steps of this tutorial.
        </a>
      </div>
    </main>
  );
}