export default function EntityList({ items, onEdit, onDelete }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item._id} className="flex items-center gap-3 border-b py-2">
                    <span className="font-bold">{item.title}:</span> <span>{item.content}</span>
                    <button onClick={() => onEdit(item)} className="ml-auto text-yellow-600">Edit</button>
                    <button onClick={() => onDelete(item._id)} className="text-red-600">Delete</button>
                </li>
            ))}
        </ul>
    );
}
