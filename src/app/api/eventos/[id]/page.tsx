import { use } from "react";

type Params = Promise<{ id: string }>;

export default function Evnto(props: { params: Params }) {
    const urlParams = use(props.params);

    return (
        <div>
            <h1>{urlParams.id}</h1>
        </div>
    );
}