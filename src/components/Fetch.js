import React, { useState, useEffect } from "react";
import useFetch from "react-fetch-hook";
import CharacterCard from "./CharacterCard";

export default function Fetch() {
    const { isLoading, error, data } = useFetch("https://randomuser.me/api");

    if (isLoading) return "Loading...";
    if (error) return "Error!";

    return (
        <>
            <img src={data.results[0].picture.medium} alt="random user" />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
}
