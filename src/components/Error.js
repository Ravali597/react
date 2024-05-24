import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <h1>Oops...Something went wrong</h1>
            <h3><p>This meaasge is from useRouterError Hook <span> - {err.status}: {err.statusText}</span></p></h3>
        </>
    )
}
export default Error;