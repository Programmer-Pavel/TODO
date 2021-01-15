import React, {useState} from "react";

interface TodoFormProps {
    onAdd(inp: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    const [inp, setInp] = useState<string>('')

    const textareaHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInp(event.target.value)
    }

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(inp)
            setInp('')
        }
    }

    return <div className="input-field todo-form">
        <i className="material-icons prefix">mode_edit</i>
        <textarea value={inp} onChange={textareaHandler} id="icon_prefix2" onKeyPress={onKeyPress}
                  className="materialize-textarea" placeholder="Введите название дела"></textarea>
        <label htmlFor="icon_prefix2" className="active">Введите название дела</label>
    </div>
}