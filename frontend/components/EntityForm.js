export default function EntityForm({ note, setNote, onSubmit, editing }) {
    return (
        <form onSubmit={onSubmit} className="mb-5 flex gap-2">
            <input
                placeholder="Title"
                value={note.title}
                onChange={e => setNote({ ...note, title: e.target.value })}
                className="border p-2 w-1/3"
            />
            <input
                placeholder="Content"
                value={note.content}
                onChange={e => setNote({ ...note, content: e.target.value })}
                className="border p-2 w-1/3"
            />
            <button className="bg-blue-500 text-white px-3 rounded">
                {editing ? 'Update' : 'Add'}
            </button>
        </form>
    );
}
