import { useRouteData } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import { postData } from "../data/data";
import CreateResume from "../components/CreateResume";

export default function Create() {
    return (
        <>
        <h1>Create a new resume</h1>
        <CreateResume />
        </>
    )
} 