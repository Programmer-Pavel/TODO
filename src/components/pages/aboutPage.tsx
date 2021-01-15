import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {

    const history = useHistory()

    return <>
        <h3>React</h3>
        <h3>React Hooks</h3>
        <h3>Typescript</h3>
        <button className='btn' onClick={() => {history.push('/')}}>Обратно к списку дел</button>
    </>
}
