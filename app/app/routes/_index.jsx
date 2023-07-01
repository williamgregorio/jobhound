import { Link, LiveReload} from "@remix-run/react";
const Index = () => {
    return (
        <>
        <main>
            <Link to="/create-new-resume" prefetch="viewport">Create New Resume</Link>
            <h1>Resume Generation</h1>
        </main>
        
        </>
    )
}

export default Index;