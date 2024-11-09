import TodoCard from './TodoCard.jsx';

export default function TodoList(props) {

    const { todos } = props;

    return (
        <ul className="main container">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex} todo={todo}>
                        <p>{todo.text}</p>
                    </TodoCard>
                );
            })}
        </ul>
    );
}