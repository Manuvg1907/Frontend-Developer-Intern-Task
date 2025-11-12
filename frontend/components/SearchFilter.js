export default function SearchFilter({ search, setSearch }) {
    return (
        <input
            className="border p-2 w-1/2 my-2"
            type="text"
            placeholder="Search by title/content..."
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
    );
}
